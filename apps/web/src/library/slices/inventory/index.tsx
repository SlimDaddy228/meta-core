import styled from '@emotion/styled'
import React, {useEffect} from 'react'
import {InventoryGrid} from '@library/components/ui/grid'
import {observer} from 'mobx-react-lite'
import type {InventoryItem} from '@library/store/inventory'
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
const initialItems: InventoryItem[] = [
  {
    id: 1,
    name: 'Item2',
    width: 2,
    height: 6,
    amount: 1,
    image: 'https://via.placeholder.com/200x600',
    position: {
      x: 0,
      y: 0,
    },
  },
]

export const Inventory = observer(() => {
  const items = store.inventory.getItems()

  useEffect(() => {
    store.inventory.setItems([...initialItems])
  }, [])

  const resultCallback: GridServiceResultCallback = (options) => {
    store.inventory.updateItem(options.id, options)
  }

  return (
    <Wrapper>
      <InventoryGrid
        items={items}
        size={50}
        columns={10}
        rows={10}
        gap={5}
        resultCallback={resultCallback}
      />
    </Wrapper>
  )
})
