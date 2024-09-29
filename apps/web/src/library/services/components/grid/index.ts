import type {MouseEvent as ReactMouseEvent} from 'react'

export type GridItem = {
  id: number
  width: number
  height: number
  position: {
    x: number
    y: number
  }
}

type Options = {
  event: ReactMouseEvent
  movingItem: GridItem
  items: GridItem[]
  columns: number
  rows: number
  resultCallback: (droppableResult: {toX: number; toY: number}) => void
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

  constructor(options: Options) {
    this.event = options.event
    this.movingItem = options.movingItem
    this.items = options.items
    this.columns = options.columns
    this.rows = options.rows
    this.resultCallback = options.resultCallback
    this.audio = new Audio()
    this.audio.volume = 0.2

    const draggableTarget = this.event.target as HTMLElement

    const clone = draggableTarget.cloneNode(true) as HTMLElement

    clone.style.position = 'absolute'
    clone.style.pointerEvents = 'none'
    clone.style.left = '-9999px'

    draggableTarget.style.pointerEvents = 'none'
    draggableTarget.style.opacity = '0.5'

    document.body.append(clone)

    this.clone = clone
    this.draggableTarget = draggableTarget
  }

  public start() {
    this.audio.src = './sounds/grid/gear_generic_pickup.wav'
    this.audio.play()

    const mouseMoveHandler = (event: MouseEvent) => {
      this.mouseMove(event)
    }

    const mouseUpHandler = (event: MouseEvent) => {
      this.mouseUp(event)
      document.removeEventListener('mousemove', mouseMoveHandler)
      document.removeEventListener('mouseup', mouseUpHandler)
    }

    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
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
      this.clone.style.background = 'red'
      return
    }

    this.clone.style.background = this.canDrop({toX, toY}) ? 'green' : 'red'
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

    this.resultCallback({
      toX,
      toY,
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
    const maxX = this.columns - this.movingItem.width
    const maxY = this.rows - this.movingItem.height

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

      // Определяем границы предмета, который мы пытаемся переместить
      const itemEndX = item.position.x + item.width
      const itemEndY = item.position.y + item.height
      const movingEndX = targetPosition.toX + this.movingItem.width
      const movingEndY = targetPosition.toY + this.movingItem.height

      // Проверка на пересечение
      return (
        targetPosition.toX < itemEndX &&
        movingEndX > item.position.x &&
        targetPosition.toY < itemEndY &&
        movingEndY > item.position.y
      )
    })
  }
}
