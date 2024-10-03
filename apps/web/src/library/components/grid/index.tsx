import React, {type FC, memo, type MouseEvent} from 'react'
import styled from '@emotion/styled'
import {
  type GridCanDropCallback,
  GridComponentsService,
  type GridDropCallback,
} from '@library/services/components/grid'
import {observer} from 'mobx-react-lite'
import type {GridContainers} from './lib/types'

const Container = styled.div`
  width: fit-content;
  margin-bottom: 200px;
`

const Storage = styled.div<{
  columns: number
  rows: number
  size: number
  gap: number
}>`
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

const LEFT_MOUSE_BUTTON_CODE = 0

interface Props {
  canDrop: GridCanDropCallback
  drop: GridDropCallback
  containers: GridContainers
}

export const Grid: FC<Props> = observer(({containers, drop, canDrop}) => {
  const onDragStart = (event: MouseEvent) => {
    if (event.button === LEFT_MOUSE_BUTTON_CODE) {
      const service = new GridComponentsService({event, drop, canDrop})
      service.start()
    }
  }

  return Object.entries(containers).map(([containerId, storages]) => (
    <Container key={containerId} data-container-id={containerId}>
      {storages.map((storage) => (
        <Storage
          key={storage.id}
          data-storage-id={storage.id}
          size={storage.size}
          gap={storage.gap}
          rows={storage.rows}
          columns={storage.columns}
        >
          {Array.from({length: storage.columns * storage.rows}).map(
            (_, index) => {
              const x = index % 10
              const y = Math.floor(index / 10)
              const item = storage.items.find(
                (item) => item.position.x === x && item.position.y === y,
              )
              return (
                <Droppable
                  key={[containerId, storage.id, x, y].join(':')}
                  data-position-x={x}
                  data-position-y={y}
                  size={storage.size}
                >
                  {item && (
                    <Draggable
                      data-draggable-id={item.id}
                      size={storage.size}
                      width={item.width}
                      height={item.height}
                      image="https://via.placeholder.com/200x200"
                      gap={storage.gap}
                      onMouseDown={onDragStart}
                    />
                  )}
                </Droppable>
              )
            },
          )}
        </Storage>
      ))}
    </Container>
  ))
})
