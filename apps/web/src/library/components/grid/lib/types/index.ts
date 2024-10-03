export type GridItemStorageNode = {
  id: number
  itemId: number
  storageId: number
}

export type GridItem = {
  id: number
  width: number
  height: number
  position: {
    x: number
    y: number
  }
  storage_nodes: GridItemStorageNode[]
}

export type GridStorage = {
  id: number
  columns: number
  rows: number
  size: number
  gap: number
  items: GridItem[]
}

export type ContainerId = number

export type GridContainers = Record<ContainerId, GridStorage[]>
