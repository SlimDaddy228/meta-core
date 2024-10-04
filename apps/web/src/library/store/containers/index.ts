import {makeAutoObservable} from 'mobx'
import type {
  GridContainerId,
  GridContainers,
  GridStorage,
} from '@components/grid/lib/types'
import type {
  GridCallbackOptions,
  GridOnDraggableDoubleClick,
} from '@library/services/components/grid'
import {TEST_NODE_222} from '@library/slices/containers'
import {store} from '@library/store'

export class CContainers {
  public readonly opened = new Set<GridContainerId>()

  private _containers: GridContainers = {}

  constructor() {
    makeAutoObservable(this)
  }

  public get(): GridContainers {
    return this._containers
  }

  public set(containers: GridContainers) {
    this._containers = containers
  }

  public add(id: GridContainerId, storages: GridStorage[]): void {
    this._containers[id] = storages
  }

  public has(id: GridContainerId): boolean {
    return Boolean(this._containers[id])
  }

  public delete(id: GridContainerId): void {
    if (this.has(id)) {
      delete this._containers[id]
    }
  }

  public canDrop(options: GridCallbackOptions): boolean {
    return this.isInBoundaries(options) && !this.isOverlapping(options)
  }

  public openItemContainer(...options: Parameters<GridOnDraggableDoubleClick>) {
    const [event, item] = options

    if (item.storage_nodes.length === 0) {
      return
    }

    this.opened.add(item.id)
    this.add(item.id, [TEST_NODE_222])
    console.log('open item container')
  }

  public closeItemContainer(id: GridContainerId): void {
    this.opened.delete(id)
    store.containers.delete(id)
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

    const newWidth = options.isRotate
      ? draggableItem.height
      : draggableItem.width
    const newHeight = options.isRotate
      ? draggableItem.width
      : draggableItem.height

    const isEqualPosition =
      draggableItem.position.x === options.toX &&
      draggableItem.position.y === options.toY
    const isEqualStorage = from.storage.id === to.storage.id
    const isEqualSize =
      draggableItem.width === newWidth || draggableItem.height === newHeight

    if (isEqualPosition && isEqualStorage && isEqualSize) {
      return
    }

    const clonePreviousItem = {
      ...draggableItem,
      position: {
        x: options.toX,
        y: options.toY,
      },
      width: newWidth,
      height: newHeight,
    }
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

    const width = options.isRotate ? draggableItem.height : draggableItem.width
    const maxX = to.storage.columns - width

    const height = options.isRotate ? draggableItem.width : draggableItem.height
    const maxY = to.storage.rows - height

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

      const draggableWidth = options.isRotate
        ? draggableItem.height
        : draggableItem.width
      const draggableHeight = options.isRotate
        ? draggableItem.width
        : draggableItem.height

      const movingEndX = options.toX + draggableWidth
      const movingEndY = options.toY + draggableHeight

      return (
        options.toX < itemEndX &&
        movingEndX > item.position.x &&
        options.toY < itemEndY &&
        movingEndY > item.position.y
      )
    })
  }
}
