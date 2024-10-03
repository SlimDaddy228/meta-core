import React, {type FC, Fragment, memo, type MouseEvent} from 'react'
import styled from '@emotion/styled'
import {
  type GridCanDropCallback,
  GridComponentsService,
  type GridDropCallback,
  type GridOnDraggableDoubleClick,
} from '@library/services/components/grid'
import {observer} from 'mobx-react-lite'
import type {GridContainerId, GridItem, GridStorage} from './lib/types'

const Container = styled.div`
  width: fit-content;
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

interface Props {
  className?: string
  containerId: GridContainerId
  canDrop: GridCanDropCallback
  drop: GridDropCallback
  onDraggableDoubleClick: GridOnDraggableDoubleClick
  storages: GridStorage[]
}

export const Grid: FC<Props> = observer(
  ({
    className,
    containerId,
    storages,
    drop,
    onDraggableDoubleClick,
    canDrop,
  }) => {
    const onMouseMove = (event: MouseEvent) => {
      const service = new GridComponentsService({event, drop, canDrop})
      service.start()
    }

    const onDoubleClick = (event: MouseEvent, item: GridItem) => {
      onDraggableDoubleClick(event, item)
    }

    return (
      <Container
        key={containerId}
        className={className}
        data-container-id={containerId}
      >
        <span>{`ContainerId: ${containerId}`}</span>
        {storages.map((storage) => (
          <Fragment key={storage.id}>
            <br />
            <span>{`StorageId: ${storage.id}`}</span>
            <Storage
              data-storage-id={storage.id}
              size={storage.size}
              gap={storage.gap}
              rows={storage.rows}
              columns={storage.columns}
            >
              {Array.from({length: storage.columns * storage.rows}).map(
                (_, index) => {
                  const x = index % storage.columns
                  const y = Math.floor(index / storage.columns)
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
                          draggable
                          onDoubleClick={(event) => onDoubleClick(event, item)}
                          onDragStart={onMouseMove}
                        />
                      )}
                    </Droppable>
                  )
                },
              )}
            </Storage>
          </Fragment>
        ))}
      </Container>
    )
  },
)
