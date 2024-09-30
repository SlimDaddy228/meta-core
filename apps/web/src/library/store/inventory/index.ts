import {makeAutoObservable} from 'mobx'
import type {GridServiceResultCallbackArguments} from '@library/services/components/grid'

export interface InventoryItem {
  id: number
  name: string
  width: number
  height: number
  image: string
  position: {
    x: number
    y: number
  }
  amount: number
}

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
      const updateFields = {
        id: options.id,
        width: options.width,
        height: options.height,
        position: {
          x: options.toX,
          y: options.toY,
        },
      }
      this._items[findIndex] = {...findItem, ...updateFields}
    }
  }
}
