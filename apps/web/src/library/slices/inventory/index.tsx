import styled from '@emotion/styled'
import React, {useEffect} from 'react'
import {InventoryGrid} from '@library/components/ui/grid'
import {observer} from 'mobx-react-lite'
import {store} from '@library/store'
import type {GridServiceResultCallback} from '@library/services/components/grid'

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
const inventory = {
  id: 1,
  size: 50,
  columns: 10,
  rows: 5,
  gap: 5,
  character_id: null,
  items: [
    {
      id: 3,
      amount: 0,
      width: 2,
      height: 3,
      positionX: 0,
      positionY: 0,
      storage_id: 1,
      directory_item_id: 'bag',
      storage_node: [
        {
          id: 1,
          storage_id: 2,
          item_id: 3,
        },
        {
          id: 2,
          storage_id: 3,
          item_id: 3,
        },
        {
          id: 3,
          storage_id: 4,
          item_id: 3,
        },
      ],
      directory_item: {
        id: 'bag',
        name: 'Сумка',
        description: 'Можно нести её',
      },
    },
  ],
}

export type InventoryItem = (typeof inventory)['items'][number]

export const Inventory = observer(() => {
  const items = store.inventory.getItems()

  useEffect(() => {
    store.inventory.setItems([...inventory.items])
  }, [])

  const resultCallback: GridServiceResultCallback = (options) => {
    store.inventory.updateItem(options.id, options)
  }

  return (
    <Wrapper>
      <InventoryGrid
        items={items}
        size={inventory.size}
        columns={inventory.columns}
        rows={inventory.rows}
        gap={inventory.gap}
        resultCallback={resultCallback}
      />
    </Wrapper>
  )
})
