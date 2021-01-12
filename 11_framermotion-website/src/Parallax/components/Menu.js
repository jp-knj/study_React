import React from 'react'
import styled from 'styled-components'

export const Menu = () => {
  return (
    <>
      <Menucontainer>
        <MenuInner>
          <Menus>
            <MenuList>
              <Title></Title>
              <Img></Img>
            </MenuList>
            <MenuList>
              <Title></Title>
              <Img></Img>
            </MenuList><MenuList>
              <Title></Title>
              <Img></Img>
            </MenuList><MenuList>
              <Title></Title>
              <Img></Img>
            </MenuList>
          </Menus>
        </MenuInner>
      </Menucontainer>
    </>
  )
}

export default Menu;

const Menucontainer = styled.div``
const MenuInner = styled.div``
const Menus = styled.ul``
const MenuList = styled.li``
const Title = styled.h2``
const Img = styled.div``
