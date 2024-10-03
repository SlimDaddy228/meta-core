import {makeAutoObservable} from 'mobx'
import type {GridContainers} from '@components/grid/lib/types'
import type {GridCallbackOptions} from '@library/services/components/grid'

export class CContainers {
  private _containers: GridContainers = {}

  constructor() {
    makeAutoObservable(this)
  }

  public getContainers(): GridContainers {
    return this._containers
  }

  public setContainers(containers: GridContainers) {
    this._containers = containers
  }

  public canDrop(options: GridCallbackOptions): boolean {
    return this.isInBoundaries(options) && !this.isOverlapping(options)
  }

  public drop(options: GridCallbackOptions): void {
    const to = this.getTo(options)
    const from = this.getFrom(options)

    if (!to || !from) {
      return
    }

    const itemIndex = from.storage.items.findIndex(
      (item) => item.id === options.draggableId,
    )

    if (itemIndex === -1) {
      return
    }

    const draggableItem = from.storage.items[itemIndex]

    if (
      draggableItem.position.x === options.toX &&
      draggableItem.position.y === options.toY &&
      from.storage.id === to.storage.id
    ) {
      return
    }

    const clonePreviousItem = {...draggableItem}
    clonePreviousItem.position.x = options.toX
    clonePreviousItem.position.y = options.toY
    to.storage.items.push(clonePreviousItem)
    from.storage.items.splice(itemIndex, 1)
  }

  private getFrom(
    options: Pick<GridCallbackOptions, 'fromContainerId' | 'fromStorageId'>,
  ) {
    const container = this._containers[options.fromContainerId]

    if (!container) {
      return null
    }

    const storage = container.find(
      (storage) => storage.id === options.fromStorageId,
    )
    if (!storage) {
      return null
    }

    return {container, storage}
  }

  private getTo(
    options: Pick<GridCallbackOptions, 'toContainerId' | 'toStorageId'>,
  ) {
    const container = this._containers[options.toContainerId]

    if (!container) {
      return null
    }

    const storage = container.find(
      (storage) => storage.id === options.toStorageId,
    )

    if (!storage) {
      return null
    }

    return {container, storage}
  }

  private isInBoundaries = (options: GridCallbackOptions): boolean => {
    const to = this.getTo(options)
    const from = this.getFrom(options)

    if (!from || !to) {
      return false
    }

    const draggableItem = from.storage.items.find(
      (item) => item.id === options.draggableId,
    )

    if (!draggableItem) {
      return false
    }

    const maxX = to.storage.columns - draggableItem.width
    const maxY = to.storage.rows - draggableItem.height

    return !(
      options.toX < 0 ||
      options.toY < 0 ||
      options.toX > maxX ||
      options.toY > maxY
    )
  }

  private isOverlapping = (options: GridCallbackOptions) => {
    const to = this.getTo(options)
    const from = this.getFrom(options)

    if (!from || !to) {
      return true
    }

    const draggableItem = from.storage.items.find(
      (item) => item.id === options.draggableId,
    )

    if (!draggableItem) {
      return true
    }

    return to.storage.items.some((item) => {
      if (item.id === draggableItem.id) {
        return false
      }

      const itemEndX = item.position.x + item.width
      const itemEndY = item.position.y + item.height
      const movingEndX = options.toX + draggableItem.width
      const movingEndY = options.toY + draggableItem.height

      return (
        options.toX < itemEndX &&
        movingEndX > item.position.x &&
        options.toY < itemEndY &&
        movingEndY > item.position.y
      )
    })
  }
}
