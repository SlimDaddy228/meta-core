import {makeAutoObservable} from 'mobx'

export interface InventoryItem {
  id: string
  name: string
  width: number
  height: number
  image: string
  position: {
    x: number
    y: number
  }
}

export class Inventory {
  private _items: InventoryItem[] = []

  constructor() {
    makeAutoObservable(this)
  }

  public setItems(items: InventoryItem[]) {
    this._items = items
  }

  public getItems(): InventoryItem[] {
    return this._items
  }

  public canDropItem(movingItemId: string, x: number, y: number) {
    const movingItem = this._items.find((item) => item.id === movingItemId)

    if (!movingItem) {
      return false
    }

    const maxX = 10 - movingItem.width
    const maxY = 100 - movingItem.height

    if (x < 0 || y < 0 || x > maxX || y > maxY) {
      return false // Не допускаем выхода за границы
    }

    // Проверка на пересечение с другими предметами
    return !this.isOverlapping(
      x,
      y,
      movingItem.width,
      movingItem.height,
      movingItemId,
    )
  }

  public moveItem(id: string, toX: number, toY: number) {
    this.setItems(
      this._items.map((item) =>
        item.id === id ? {...item, position: {x: toX, y: toY}} : item,
      ),
    )
  }

  private isOverlapping(
    x: number,
    y: number,
    width: number,
    height: number,
    movingItemId: string,
  ) {
    return this._items.some((item) => {
      if (item.id === movingItemId) return false // Игнорируем перемещаемый элемент

      // Определяем границы предмета, который мы пытаемся переместить
      const itemEndX = item.position.x + item.width
      const itemEndY = item.position.y + item.height
      const movingEndX = x + width
      const movingEndY = y + height

      // Проверка на пересечение
      return (
        x < itemEndX &&
        movingEndX > item.position.x &&
        y < itemEndY &&
        movingEndY > item.position.y
      )
    })
  }
}
