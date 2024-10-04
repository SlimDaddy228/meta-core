import styled from '@emotion/styled'
import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import type {GridContainers, GridStorage} from '@components/grid/lib/types'
import {store} from '@library/store'
import {Grid} from '@components/grid'
import type {
  GridCallbackOptions,
  GridCanDropCallback,
  GridDropCallback,
  GridOnDraggableDoubleClick,
} from '@library/services/components/grid'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  background: url('images/inventory/shabby_overlay.png'),
    linear-gradient(
      180deg,
      rgba(26, 27, 30, 0.9) 0%,
      rgba(26, 27, 30, 0.9) 75%,
      rgba(26, 27, 30, 0.9) 87.5%,
      rgba(26, 27, 30, 0.9) 100%
    );
`

const Inventory = styled(Grid)`
  position: absolute;
  top: 30px;
  right: 30px;
  max-height: 90vh;
  overflow: auto;
`

const InventoryCenter = styled(Grid)`
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 90vh;
  overflow: auto;
`

export const TEST_NODE_222: GridStorage = {
  id: 222,
  size: 50,
  columns: 5,
  rows: 1,
  gap: 2,
  items: [
    {
      id: 200,
      width: 1,
      height: 1,
      position: {
        x: 0,
        y: 0,
      },
      storage_nodes: [],
    },
  ],
}

const mainInventory: GridContainers = {
  1: [
    {
      id: 1,
      size: 50,
      columns: 5,
      rows: 1,
      gap: 2,
      items: [],
    },
    {
      id: 2,
      size: 50,
      columns: 5,
      rows: 5,
      gap: 2,
      items: [
        {
          id: 1,
          width: 1,
          height: 1,
          position: {
            x: 1,
            y: 1,
          },
          storage_nodes: [],
        },
        {
          id: 2,
          width: 4,
          height: 1,
          position: {
            x: 0,
            y: 0,
          },
          storage_nodes: [],
        },
      ],
    },
    {
      id: 3,
      size: 50,
      columns: 5,
      rows: 1,
      gap: 2,
      items: [],
    },
  ],
}

const bag: GridContainers = {
  2: [
    {
      id: 4,
      size: 50,
      columns: 10,
      rows: 100,
      gap: 2,
      items: [
        {
          id: 100,
          width: 1,
          height: 1,
          position: {
            x: 1,
            y: 1,
          },
          storage_nodes: [
            {
              id: 1,
              itemId: 100,
              storageId: TEST_NODE_222.id,
            },
          ],
        },
      ],
    },
  ],
}

export const Containers = observer(() => {
  const containers = store.containers.get()
  const openedContainers = store.containers.opened

  useEffect(() => {
    store.containers.set({...mainInventory, ...bag})
  }, [])

  const canDrop: GridCanDropCallback = (options: GridCallbackOptions) => {
    return store.containers.canDrop(options)
  }

  const drop: GridDropCallback = (options: GridCallbackOptions) => {
    store.containers.drop(options)
  }

  const onDraggableDoubleClick: GridOnDraggableDoubleClick = (event, item) => {
    store.containers.openItemContainer(event, item)
  }

  if (!containers[1] || !containers[2]) {
    return null
  }

  return (
    <Wrapper>
      <Grid
        containerId={1}
        storages={containers[1]}
        canDrop={canDrop}
        drop={drop}
        onDraggableDoubleClick={onDraggableDoubleClick}
      />
      <Inventory
        containerId={2}
        storages={containers[2]}
        canDrop={canDrop}
        drop={drop}
        onDraggableDoubleClick={onDraggableDoubleClick}
      />
      {Object.entries(containers).map(([containerId, storages]) => {
        const normalizeStorageId = Number(containerId)

        if (!openedContainers.has(normalizeStorageId)) {
          return null
        }

        const close = () => {
          store.containers.closeItemContainer(normalizeStorageId)
        }

        return (
          <div>
            <button onClick={close} type="button">
              close
            </button>
            <InventoryCenter
              key={normalizeStorageId}
              containerId={normalizeStorageId}
              storages={storages}
              canDrop={canDrop}
              drop={drop}
              onDraggableDoubleClick={onDraggableDoubleClick}
            />
          </div>
        )
      })}
    </Wrapper>
  )
})
