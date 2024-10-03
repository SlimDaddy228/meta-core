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
    return true
  }

  public drop(options: GridCallbackOptions): void {
    const container = this._containers[options.toContainerId]

    if (!container) {
      return
    }

    const storage = container.find(
      (storage) => storage.id === options.toStorageId,
    )

    if (!storage) {
      return
    }

    const isMoveToAnotherContainer =
      options.fromContainerId !== options.toContainerId

    if (isMoveToAnotherContainer) {
      const previousContainer = this._containers[options.fromContainerId]

      if (!previousContainer) {
        return
      }

      const previousStorage = previousContainer.find(
        (storage) => storage.id === options.fromStorageId,
      )

      if (!previousStorage) {
        return
      }

      const itemIndex = previousStorage.items.findIndex(
        (item) => item.id === options.draggableId,
      )

      if (itemIndex === -1) {
        return
      }

      const clonePreviousItem = {...previousStorage.items[itemIndex]}
      clonePreviousItem.position.x = options.toX
      clonePreviousItem.position.y = options.toY
      storage.items.push(clonePreviousItem)
      previousStorage.items.splice(itemIndex, 1)
      return
    }

    const isMoveToAnotherStorage = options.fromStorageId !== options.toStorageId

    if (isMoveToAnotherStorage) {
      const previousStorage = container.find(
        (storage) => storage.id === options.fromStorageId,
      )

      if (!previousStorage) {
        return
      }

      const itemIndex = previousStorage.items.findIndex(
        (item) => item.id === options.draggableId,
      )

      if (itemIndex === -1) {
        return
      }

      const clonePreviousItem = {...previousStorage.items[itemIndex]}
      clonePreviousItem.position.x = options.toX
      clonePreviousItem.position.y = options.toY

      storage.items.push(clonePreviousItem)
      previousStorage.items.splice(itemIndex, 1)
      return
    }

    const findItemIndex = storage.items.findIndex(
      (item) => item.id === options.draggableId,
    )

    if (findItemIndex === -1) {
      return
    }

    storage.items[findItemIndex].position.x = options.toX
    storage.items[findItemIndex].position.y = options.toY
  }
}
