import styled from '@emotion/styled'
import React, {type FC, memo, type MouseEvent as ReactMouseEvent} from 'react'
import {observer} from 'mobx-react-lite'
import {
  GridComponentService,
  type GridServiceResultCallback,
} from '@library/services/components/grid'
import type {InventoryItem} from '@library/slices/inventory'

const Grid = styled.div<{
  columns: number
  rows: number
  size: number
  gap: number
}>`
  position: absolute;
  right: 30px;
  top: 30px;
  display: grid;
  grid-template-columns: repeat(
    ${(properties) => properties.columns},
    ${(properties) => properties.size}px
  );
  grid-template-rows: repeat(
    ${(properties) => properties.rows},
    ${(properties) => properties.size}px
  );
  background-color: #333;
  padding: 10px;
  width: fit-content;
  max-height: 95vh;
  overflow: auto;
  gap: ${(properties) => properties.gap}px;
`

const Droppable = memo(styled.div<{
  size: number
}>`
  width: ${(properties) => properties.size}px;
  height: ${(properties) => properties.size}px;
  background-color: #777;
  position: relative;
`)

const Draggable = styled.div<{
  width: number
  height: number
  image: string
  size: number
  gap: number
}>`
  width: ${(properties) =>
    properties.width * properties.size + properties.width * properties.gap}px;
  height: ${(properties) =>
    properties.height * properties.size + properties.height * properties.gap}px;
  background-image: url(${(properties) => properties.image});
  background-size: cover;
  background-position: center;
  cursor: grab;
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
`

interface Props {
  columns: number
  rows: number
  size: number
  gap: number
  resultCallback: GridServiceResultCallback
  items: InventoryItem[]
}

export const InventoryGrid: FC<Props> = observer(
  ({columns, rows, size, gap, items, resultCallback}) => {
    const onMouseDown = (
      event: ReactMouseEvent<HTMLDivElement>,
      movingItem: InventoryItem,
    ) => {
      if (event.button !== 0) {
        return
      }

      const service = new GridComponentService({
        event,
        movingItem,
        items,
        columns,
        rows,
        size,
        resultCallback,
      })

      service.start()
    }

    return (
      <Grid columns={columns} rows={rows} size={size} gap={gap}>
        {Array.from({length: columns * rows}).map((_, index) => {
          const x = index % 10
          const y = Math.floor(index / 10)
          const item = items.find(
            (item) => item.positionX === x && item.positionY === y,
          )
          return (
            <Droppable key={`${x}-${y}`} data-x={x} data-y={y} size={size}>
              {item && (
                <Draggable
                  size={size}
                  width={item.width}
                  height={item.height}
                  image="https://via.placeholder.com/200x200"
                  gap={gap}
                  onMouseDown={(event) => onMouseDown(event, item)}
                />
              )}
            </Droppable>
          )
        })}
      </Grid>
    )
  },
)
