import {makeAutoObservable} from 'mobx'
import type {GridServiceResultCallbackArguments} from '@library/services/components/grid'
import type {InventoryItem} from '@library/slices/inventory'

export class CInventory {
  private _items: InventoryItem[] = []

  constructor() {
    makeAutoObservable(this)
  }

  public getItems(): InventoryItem[] {
    return this._items
  }

  public setItems(items: InventoryItem[]) {
    this._items = items
  }

  public updateItem(
    id: InventoryItem['id'],
    options: GridServiceResultCallbackArguments,
  ) {
    const findIndex = this._items.findIndex((item) => item.id === id)
    const findItem = this._items[findIndex]

    if (findItem) {
      const updateFields: Pick<
        InventoryItem,
        'id' | 'width' | 'height' | 'positionX' | 'positionY'
      > = {
        id: options.id,
        width: options.width,
        height: options.height,
        positionX: options.toX,
        positionY: options.toY,
      }
      this._items[findIndex] = {...findItem, ...updateFields}
    }
  }
}
