import styled from '@emotion/styled'
import React from 'react'
import {InventoryGrid} from '@library/slices/inventory/grid'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  background: url('https://cdn.discordapp.com/attachments/1286134080131563552/1289652051147620573/dusty_grunge_style_overlay_texture.png?ex=66f99991&is=66f84811&hm=5ab5f8530a0a1663c86ceab0c36f5685dd72f4dd893b4065c44a4a2240d66bd5&'),
    linear-gradient(
      180deg,
      rgba(26, 27, 30, 0.9) 0%,
      rgba(26, 27, 30, 0.9) 75%,
      rgba(26, 27, 30, 0.9) 87.5%,
      rgba(26, 27, 30, 0.9) 100%
    );
`

export const Inventory = () => {
  return (
    <Wrapper>
      <InventoryGrid columns={10} rows={100} />
    </Wrapper>
  )
}
