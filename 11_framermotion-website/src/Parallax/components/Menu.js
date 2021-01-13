import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'


export const Menu = ({ menuState, setMenuState }) => {
  return (
    <>
      <AnimatePresence>
        {menuState && (
          <MenuSection
            initial={{ visibility: "hidden" }}
            exit={{
              visibility: "hidden",
              transition: { delay: 1 },
            }}
            animate={{
              visibility: "visible",
              transition: { delay: 1 },
            }}
          >
          <MenuHeader>
            <MenuClose onClick={() => setMenuState(!menuState)}>
              <AiOutlineClose size={32} />
            </MenuClose>
          </MenuHeader>
          <Menucontainer>
            <Menus>
                <MenuList>
                  <MenuLink to="/">
                      <Title>Home</Title>
                  </MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink to="/activity">
                    <Title>Activity</Title>
                  </MenuLink>
                </MenuList>
                <MenuList>
                  <MenuLink to="/people">
                      <Title>People</Title>
                  </MenuLink>
                </MenuList>
              <MenuList>
                <MenuLink to="/news">
                    <Title>News</Title>
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

const MenuSection = styled(motion.div)`
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
  z-index: 2000;
`

const Menucontainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Menus = styled.ul`
  /* height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center; */
  margin: auto 0;
`
const MenuList = styled.li`
  position: relative;
  color: white;
  width: 100%;
`

const MenuLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
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
