import styled from '@emotion/styled'
import {
  DndProvider,
  useDrag,
  useDragDropManager,
  useDragLayer,
  useDrop,
} from 'react-dnd'
import {getEmptyImage, HTML5Backend} from 'react-dnd-html5-backend'
import React, {type FC, useEffect} from 'react'
import type {InventoryItem} from '@library/store/inventory'
import {observer} from 'mobx-react-lite'
import {store} from '@library/store'

const Grid = styled.div<{columns: number; rows: number}>`
  position: absolute;
  right: 30px;
  top: 30px;
  display: grid;
  grid-template-columns: repeat(${(properties) => properties.columns}, 50px);
  grid-template-rows: repeat(${(properties) => properties.rows}, 50px);
  background-color: #333;
  padding: 10px;
  width: fit-content;
  max-height: 95vh;
  overflow: auto;
  gap: 2px;
`

const SlotContainer = styled.div<{isOver: boolean; canDrop: boolean}>`
  width: 50px;
  height: 50px;
  background-color: ${({isOver, canDrop}) =>
    isOver ? (canDrop ? 'green' : 'red') : '#777'};
  position: relative;
`

const ItemContainer = styled.div<{
  width: number
  height: number
  image: string
}>`
  width: ${(properties) => properties.width * 50}px;
  height: ${(properties) => properties.height * 50}px;
  background-image: url(${(properties) => properties.image});
  background-size: cover;
  cursor: grab;
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
`

const InventoryItemComponent: React.FC<{
  item: InventoryItem
  moveItem: any
}> = observer(({item, moveItem}) => {
  const [{isDragging}, drag, preview] = useDrag({
    type: 'ITEM',
    item: () => {
      return {...item, id: item.id} // Возвращаем только ID элемента
    },
    end: (draggedItem, monitor) => {
      const dropResult = monitor.getDropResult()
      if (dropResult) {
        moveItem(item.id, dropResult.x, dropResult.y)
      }
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      }
    },
  })

  useEffect(() => {
    preview(getEmptyImage(), {captureDraggingState: false})
  }, [])

  const handleKeyDown = (event: KeyboardEvent) => {
    console.log('xui')
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <ItemContainer
      ref={drag}
      width={item.width}
      height={item.height}
      image={item.image}
      style={{
        opacity: isDragging ? 0.5 : 1,
        pointerEvents: isDragging ? 'none' : 'all',
      }}
    />
  )
})

const InventorySlot: React.FC<{
  x: number
  y: number
  children?: React.ReactNode
}> = observer(({x, y, children}) => {
  const [{isOver, canDrop}, drop] = useDrop({
    accept: 'ITEM',
    drop: () => ({x, y}),
    canDrop: (item: InventoryItem) => {
      return store.inventory.canDropItem(item.id, x, y)
    },
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }
    },
  })

  return (
    <SlotContainer ref={drop} canDrop={canDrop} isOver={isOver}>
      {children}
    </SlotContainer>
  )
})

interface Props {
  columns: number
  rows: number
}

const DraggedItemPreview = styled(ItemContainer)<{
  x: number
  y: number
  canDrop: boolean
}>`
  pointer-events: none;
  z-index: 10000;
  position: absolute;
  transform: translate(${({x}) => x}px, ${({y}) => y}px);
  border: 10px solid ${({canDrop}) => (canDrop ? 'green' : 'red')};
`

const CustomDragLayer: FC<{items: InventoryItem[]}> = ({items}) => {
  const {isDragging, item, clientOffset} = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    clientOffset: monitor.getClientOffset(),
    isDragging: monitor.isDragging(),
  }))

  const dragDropManager = useDragDropManager()

  if (!isDragging || !item || !clientOffset) return null

  const draggedItem = items.find((invItem) => invItem.id === item.id)

  if (!draggedItem) return null

  const monitor = dragDropManager.getMonitor()
  const registry = dragDropManager.getRegistry()
  const id = monitor.getTargetIds()
  const canDrop = id[0]
    ? registry.getTarget(id[0]).canDrop(monitor, id[0])
    : false

  return (
    <DraggedItemPreview
      image={draggedItem.image}
      width={draggedItem.width}
      height={draggedItem.height}
      x={clientOffset.x}
      y={clientOffset.y}
      canDrop={canDrop}
    />
  )
}

export const InventoryGrid: FC<Props> = observer(({columns, rows}) => {
  useEffect(() => {
    store.inventory.setItems([
      {
        id: '1',
        name: 'Пистолет',
        width: 2,
        height: 1,
        image: 'https://via.placeholder.com/100x50',
        position: {x: 0, y: 0},
      },
      {
        id: '2',
        name: 'Пистолет',
        width: 2,
        height: 6,
        image: 'https://via.placeholder.com/200x600',
        position: {x: 0, y: 1},
      },
    ])
  }, [])

  return (
    <DndProvider
      backend={HTML5Backend}
      options={{
        enableKeyboardEvents: true,
      }}
    >
      <Grid columns={columns} rows={rows}>
        {Array.from({length: columns * rows}).map((_, index) => {
          const x = index % 10
          const y = Math.floor(index / 10)
          const item = store.inventory
            .getItems()
            .find((itm) => itm.position.x === x && itm.position.y === y)

          return (
            // eslint-disable-next-line react/no-array-index-key
            <InventorySlot key={`${x}-${y}`} x={x} y={y}>
              {item && (
                <InventoryItemComponent
                  item={item}
                  moveItem={store.inventory.moveItem.bind(store.inventory)}
                />
              )}
            </InventorySlot>
          )
        })}
      </Grid>
      <CustomDragLayer items={store.inventory.getItems()} />
    </DndProvider>
  )
})
