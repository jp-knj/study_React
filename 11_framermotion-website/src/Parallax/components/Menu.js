import React, { useState } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

export const Menu = ({ menuState, setMenuState }) => {
  return (
    <>
      <AnimatePresence>
        {menuState && (
          <>
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
                    <MenuLink to="/" onClick={() => setMenuState(!menuState)}>
                      <Title>Home</Title>
                  </MenuLink>
                </MenuList>
                <MenuList>
                    <MenuLink to="/activity" onClick={() => setMenuState(!menuState)}>
                    <Title>Activity</Title>
                  </MenuLink>
                </MenuList>
                <MenuList>
                    <MenuLink to="/people" onClick={() => setMenuState(!menuState)}>
                      <Title>People</Title>
                  </MenuLink>
                </MenuList>
              <MenuList>
                    <MenuLink to="/news" onClick={() => setMenuState(!menuState)}>
                    <Title>News</Title>
                </MenuLink>
              </MenuList>
            </Menus>
          </Menucontainer>
          </MenuSection>
          <Panels />
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const Panels = () => {
  const [panelComplete, setPanelComplete] = useState(false);
  return (
    <>
      <LeftPanelBackground
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          top: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
      ></LeftPanelBackground>
      <RightPanelBackground
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        onAnimationComplete={() => {
          setPanelComplete(panelComplete)
        }}
      ></RightPanelBackground>
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
const LeftPanelBackground = styled(motion.div)`
  height: 100vh;
  width: 50vw;
  position: absolute;
  background-color: black;
  z-index: 11;
`

const RightPanelBackground = styled(motion.div)`
  height: 100vh;
  width: 50vw;
  position: absolute;
  right: 0;
  z-index: 11;
  background-color: white;
`
