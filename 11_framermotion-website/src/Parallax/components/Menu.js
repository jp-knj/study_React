import React from 'react'
import styled from 'styled-components'

export const Menu = () => {
  return (
    <>
      <MenuSection>
        <MenuHeader>
          <MenuClose></MenuClose>
        </MenuHeader>
        <Menucontainer>
          <MenuInner>
            <Menus>
              <MenuList>
                <Title>Home</Title>
                <Img></Img>
              </MenuList>
              <MenuList>
                <Title>Acitivity</Title>
                <Img></Img>
              </MenuList><MenuList>
                <Title>News</Title>
                <Img></Img>
              </MenuList><MenuList>
                <Title>People</Title>
                <Img></Img>
              </MenuList>
            </Menus>
          </MenuInner>
          </Menucontainer>
      </MenuSection>
    </>
  )
}

export default Menu;

const MenuSection = styled.div`
`
const MenuHeader = styled.div``
const MenuClose = styled.div``
const Menucontainer = styled.div`
`
const MenuInner = styled.div`

`
const Menus = styled.ul`
`
const MenuList = styled.li``
const Title = styled.h2``
const Img = styled.div``
