import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { AnimatePresence } from 'framer-motion'
export const Menu = ({ menuState, setMenuState}) => {
  return (
    <>
      <AnimatePresence>
      {menuState && (
      <MenuSection>
        <MenuHeader>
          <MenuClose><AiOutlineClose size={ 32 }/></MenuClose>
        </MenuHeader>
        <Menucontainer>
          <Menus>
            <MenuList>
              <MenuLink>
                <Title>Home</Title>
                <Img></Img>
              </MenuLink>
            </MenuList>
            <MenuList>
              <MenuLink>
                <Title>Acitivity</Title>
                <Img></Img>
              </MenuLink>
            </MenuList><MenuList>
              <MenuLink>
                <Title>People</Title>
                <Img></Img>
              </MenuLink>
            </MenuList><MenuList>
              <MenuLink>
                <Title>New</Title>
                <Img></Img>
              </MenuLink>
            </MenuList>
          </Menus>
        </Menucontainer>
        </MenuSection>
        )}
      </AnimatePresence>
    </>
  )
}
export default Menu;

const MenuSection = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 9;
  overflow: hidden;
  background: #fff;
`
const MenuHeader = styled.div`
  z-index: 1000;
  position: absolute;
  top: 30px;
  right: 60px;
`

const MenuClose = styled.div`
  height: 30px;
  width: 30px;
`

const Menucontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Menus = styled.ul`
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`
const MenuList = styled.li`
  position: relative;
  color: white;
  height : calc((100% / 4) - 2px);
  width: 100%;
`

const MenuLink = styled.a`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
`

const Title = styled.h2`
  color: black;
  font-size: 4rem;
  font-weight: 500;
`
const Img = styled.img``
