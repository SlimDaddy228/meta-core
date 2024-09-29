import styled from '@emotion/styled'
import React, {
  type FC,
  type MouseEvent as ReactMouseEvent,
  useState,
} from 'react'
import {observer} from 'mobx-react-lite'
import {GridComponentService} from '@library/services/components/grid'

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

const Droppable = styled.div`
  width: 50px;
  height: 50px;
  background-color: #777;
  position: relative;
`

const Draggable = styled.div<{
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

interface Props {
  columns: number
  rows: number
}

export const InventoryGrid: FC<Props> = observer(({columns, rows}) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Item1',
      width: 1,
      height: 1,
      image: 'https://via.placeholder.com/100x100',
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 2,
      name: 'Item2',
      width: 2,
      height: 2,
      image: 'https://via.placeholder.com/200x200',
      position: {
        x: 1,
        y: 1,
      },
    },
  ])

  const onMouseDown = (
    event: ReactMouseEvent<HTMLDivElement>,
    movingItem: (typeof items)[number],
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
      resultCallback: ({toX, toY}) => {
        setItems((previousState) => {
          return previousState.map((item) =>
            item.id === movingItem.id
              ? {...item, position: {x: toX, y: toY}}
              : item,
          )
        })
      },
    })

    service.start()
  }

  return (
    <Grid columns={columns} rows={rows}>
      {Array.from({length: columns * rows}).map((_, index) => {
        const x = index % 10
        const y = Math.floor(index / 10)
        const item = items.find(
          (item) => item.position.x === x && item.position.y === y,
        )
        return (
          <Droppable key={`${x}-${y}`} data-x={x} data-y={y}>
            {item && (
              <Draggable
                width={item.width}
                height={item.height}
                image={item.image}
                onMouseDown={(event) => onMouseDown(event, item)}
              />
            )}
          </Droppable>
        )
      })}
    </Grid>
  )
})
