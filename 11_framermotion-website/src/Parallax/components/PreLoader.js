import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }
export const PreLoader = () => {
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
      ></RightPanelBackground>
    </>
  )
}

export default PreLoader;

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
