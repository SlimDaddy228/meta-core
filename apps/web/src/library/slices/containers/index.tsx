import styled from '@emotion/styled'
import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import type {GridContainers} from '@components/grid/lib/types'
import {store} from '@library/store'
import {Grid} from '@components/grid'
import type {
  GridCallbackOptions,
  GridCanDropCallback,
  GridDropCallback,
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
const initContainers: GridContainers = {
  1: [
    {
      id: 1,
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
      ],
    },
    {
      id: 2,
      size: 50,
      columns: 5,
      rows: 5,
      gap: 2,
      items: [],
    },
  ],
}

export const Containers = observer(() => {
  const containers = store.containers.getContainers()

  useEffect(() => {
    store.containers.setContainers(initContainers)
  }, [])

  const canDrop: GridCanDropCallback = (options: GridCallbackOptions) => {
    return store.containers.canDrop(options)
  }

  const drop: GridDropCallback = (options: GridCallbackOptions) => {
    store.containers.drop(options)
  }

  return (
    <Wrapper>
      <Grid containers={containers} canDrop={canDrop} drop={drop} />
    </Wrapper>
  )
})
