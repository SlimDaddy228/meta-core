import type {MouseEvent as ReactMouseEvent} from 'react'
import type {InventoryItem} from '@library/slices/inventory'

export type GridServiceResultCallbackArguments = {
  id: InventoryItem['id']
  toX: InventoryItem['positionX']
  toY: InventoryItem['positionY']
  width: InventoryItem['width']
  height: InventoryItem['height']
}

export type GridServiceResultCallback = (
  droppableResult: GridServiceResultCallbackArguments,
) => void

type Options = {
  event: ReactMouseEvent
  movingItem: InventoryItem
  items: InventoryItem[]
  columns: number
  rows: number
  size: number
  resultCallback: GridServiceResultCallback
}

type TargetPosition = {toX: number; toY: number}

export class GridComponentService {
  private readonly event: Options['event']

  private readonly movingItem: Options['movingItem']

  private readonly items: Options['items']

  private readonly columns: Options['columns']

  private readonly rows: Options['rows']

  private readonly clone: HTMLElement

  private readonly draggableTarget: HTMLElement

  private readonly resultCallback: Options['resultCallback']

  private readonly audio: HTMLAudioElement

  private readonly size: Options['size']

  constructor(options: Options) {
    this.event = options.event
    this.movingItem = options.movingItem
    this.items = options.items
    this.columns = options.columns
    this.rows = options.rows
    this.resultCallback = options.resultCallback
    this.size = options.size

    this.audio = new Audio()
    this.audio.volume = 0.2

    const draggableTarget = this.event.target as HTMLElement

    const clone = draggableTarget.cloneNode(true) as HTMLElement

    clone.style.position = 'absolute'
    clone.style.pointerEvents = 'none'
    clone.style.left = '-9999px'
    clone.style.border = '3px solid transparent'

    draggableTarget.style.pointerEvents = 'none'
    draggableTarget.style.opacity = '0.5'

    document.body.append(clone)

    this.clone = clone
    this.draggableTarget = draggableTarget
  }

  private _isRotated = false

  public get isRotated(): boolean {
    return this._isRotated
  }

  public set isRotated(value: boolean) {
    this._isRotated = value
  }

  public start() {
    this.audio.src = './sounds/grid/gear_generic_pickup.wav'
    this.audio.play()

    const mouseMoveHandler = (event: MouseEvent) => {
      this.mouseMove(event)
    }

    const mouseKeyUpHandler = (event: KeyboardEvent) => {
      if (event.code.toLowerCase() === 'keyr') {
        this.rotate()
      }
    }

    const mouseUpHandler = (event: MouseEvent) => {
      this.mouseUp(event)
      document.removeEventListener('mousemove', mouseMoveHandler)
      document.removeEventListener('mouseup', mouseUpHandler)
      document.removeEventListener('keyup', mouseKeyUpHandler)
    }

    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
    document.addEventListener('keyup', mouseKeyUpHandler)
  }

  public getMovingSize() {
    const height = this.isRotated
      ? this.movingItem.width
      : this.movingItem.height

    const width = this.isRotated
      ? this.movingItem.height
      : this.movingItem.width

    return {height, width}
  }

  public rotate(): void {
    this.isRotated = !this.isRotated

    const {width, height} = this.getMovingSize()

    this.clone.style.width = `${this.size * width}px`
    this.clone.style.height = `${this.size * height}px`
  }

  private mouseMove(event: MouseEvent) {
    const {pageX, pageY} = event

    if (pageX > 0 && pageX < window.innerWidth) {
      this.clone.style.left = `${pageX}px`
    }

    if (pageY > 0 && pageY < window.innerHeight) {
      this.clone.style.top = `${pageY}px`
    }

    const target = event.target as HTMLElement

    const [toX, toY] = [Number(target.dataset.x), Number(target.dataset.y)]

    if (Number.isNaN(toX) || Number.isNaN(toY)) {
      this.clone.style.borderColor = 'red'
      return
    }

    this.clone.style.borderColor = this.canDrop({toX, toY}) ? 'green' : 'red'
  }

  private mouseUp(event: MouseEvent) {
    this.clone.remove()

    this.draggableTarget.style.pointerEvents = 'unset'
    this.draggableTarget.style.opacity = '1.0'

    const target = event.target as HTMLElement

    const [toX, toY] = [Number(target.dataset.x), Number(target.dataset.y)]

    if (Number.isNaN(toX) || Number.isNaN(toY)) {
      this.audio.src = './sounds/grid/fail.wav'
      this.audio.play()
      return
    }

    const targetPosition = {toX, toY}

    if (!this.canDrop(targetPosition)) {
      this.audio.src = './sounds/grid/fail.wav'
      this.audio.play()
      return
    }

    const {width, height} = this.getMovingSize()

    this.resultCallback({
      id: this.movingItem.id,
      toX,
      toY,
      width,
      height,
    })

    this.audio.src = './sounds/grid/gear_generic_drop.wav'
    this.audio.play()
  }

  private canDrop(targetPosition: TargetPosition) {
    if (this.isOverlapping(targetPosition)) {
      return false
    }

    if (!this.isInBoundaries(targetPosition)) {
      return false
    }

    return true
  }

  private isInBoundaries = (targetPosition: TargetPosition) => {
    const {width, height} = this.getMovingSize()

    const maxX = this.columns - width
    const maxY = this.rows - height

    return !(
      targetPosition.toX < 0 ||
      targetPosition.toY < 0 ||
      targetPosition.toX > maxX ||
      targetPosition.toY > maxY
    )
  }

  private isOverlapping = (targetPosition: TargetPosition) => {
    return this.items.some((item) => {
      if (item.id === this.movingItem.id) {
        return false // Игнорируем перемещаемый элемент
      }

      const {width, height} = this.getMovingSize()

      // Определяем границы предмета, который мы пытаемся переместить
      const itemEndX = item.positionX + item.width
      const itemEndY = item.positionY + item.height
      const movingEndX = targetPosition.toX + width
      const movingEndY = targetPosition.toY + height

      // Проверка на пересечение
      return (
        targetPosition.toX < itemEndX &&
        movingEndX > item.positionX &&
        targetPosition.toY < itemEndY &&
        movingEndY > item.positionY
      )
    })
  }
}
