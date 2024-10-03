import {type MouseEvent as ReactMouseEvent} from 'react'
import type {GridItem} from '@components/grid/lib/types'

export type GridCallbackOptions = {
  draggableId: number
  fromStorageId: number
  fromContainerId: number
  toStorageId: number
  toContainerId: number
  toX: number
  toY: number
}

export type GridCanDropCallback = (options: GridCallbackOptions) => boolean
export type GridDropCallback = (options: GridCallbackOptions) => void
export type GridOnDraggableDoubleClick = (
  event: ReactMouseEvent,
  item: GridItem,
) => void

type Options = {
  event: ReactMouseEvent
  canDrop: GridCanDropCallback
  drop: GridDropCallback
}

export class GridComponentsService {
  private readonly event: Options['event']

  private readonly canDrop: Options['canDrop']

  private readonly drop: Options['drop']

  private readonly draggableClone: HTMLElement

  private readonly draggableTarget: HTMLElement

  constructor(options: Options) {
    this.event = options.event
    this.canDrop = options.canDrop
    this.drop = options.drop

    this.draggableTarget = this.event.target as HTMLElement
    this.draggableClone = this.createDraggableClone()
  }

  public start() {
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

  private rotate(): void {}

  private createDraggableClone(): HTMLElement {
    const clone = this.draggableTarget.cloneNode(true) as HTMLElement

    clone.style.position = 'absolute'
    clone.style.pointerEvents = 'none'
    clone.style.left = '-9999px'
    clone.style.border = '3px solid transparent'

    this.draggableTarget.style.pointerEvents = 'none'
    this.draggableTarget.style.opacity = '0.5'

    document.body.append(clone)

    return clone
  }

  private mouseMove(event: MouseEvent) {
    const {pageX, pageY} = event

    if (pageX > 0 && pageX < window.innerWidth) {
      this.draggableClone.style.left = `${pageX}px`
    }

    if (pageY > 0 && pageY < window.innerHeight) {
      this.draggableClone.style.top = `${pageY}px`
    }

    const options = this.parseOptions(event)

    if (!options) {
      this.draggableClone.style.borderColor = 'red'
      return
    }

    this.draggableClone.style.borderColor = this.canDrop(options)
      ? 'green'
      : 'red'
  }

  private mouseUp(event: MouseEvent) {
    this.draggableClone.remove()
    this.draggableTarget.style.pointerEvents = 'all'
    this.draggableTarget.style.opacity = '1.0'

    const options = this.parseOptions(event)

    if (!options) {
      return
    }

    if (!this.canDrop(options)) {
      return
    }

    this.drop(options)
  }

  private parseOptions(event: MouseEvent): GridCallbackOptions | null {
    const droppableTarget = event.target as HTMLElement
    const {positionX, positionY} = droppableTarget.dataset
    const [toX, toY] = [Number(positionX), Number(positionY)]

    if (Number.isNaN(toX) || Number.isNaN(toY)) {
      return null
    }

    const droppableStorageTarget = droppableTarget.parentNode as HTMLElement
    const toStorageId = Number(droppableStorageTarget.dataset.storageId)

    if (Number.isNaN(toStorageId)) {
      return null
    }

    const droppableContainerTarget =
      droppableStorageTarget.parentNode as HTMLElement
    const toContainerId = Number(droppableContainerTarget.dataset.containerId)

    if (Number.isNaN(toContainerId)) {
      return null
    }

    const draggableId = Number(this.draggableTarget.dataset.draggableId)

    if (Number.isNaN(draggableId)) {
      return null
    }

    const draggableStorageTarget = this.draggableTarget.parentNode
      ?.parentNode as HTMLElement

    if (!draggableStorageTarget) {
      return null
    }

    const fromStorageId = Number(draggableStorageTarget.dataset.storageId)

    if (Number.isNaN(fromStorageId)) {
      return null
    }

    const draggableContainerTarget =
      draggableStorageTarget.parentNode as HTMLElement
    const fromContainerId = Number(draggableContainerTarget.dataset.containerId)

    if (Number.isNaN(fromContainerId)) {
      return null
    }

    return {
      draggableId,
      fromContainerId,
      fromStorageId,
      toStorageId,
      toContainerId,
      toX,
      toY,
    }
  }
}
