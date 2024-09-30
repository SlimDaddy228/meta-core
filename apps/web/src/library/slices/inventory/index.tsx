import styled from '@emotion/styled'
import React from 'react'
import {InventoryGrid} from '@library/components/ui/grid'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  background: url('https://media.discordapp.net/attachments/1286134080131563552/1289652051147620573/dusty_grunge_style_overlay_texture.png?ex=66fa4251&is=66f8f0d1&hm=e935c3552ece00a09d7ebeaa2acb26700e16a83edffdfce374fde85b9f9a7a1a&=&format=webp&quality=lossless&width=1613&height=905'),
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
      <InventoryGrid size={50} columns={10} rows={100} gap={2} />
    </Wrapper>
  )
}
