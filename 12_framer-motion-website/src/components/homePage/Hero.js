import React from 'react'
import { motion, useViewportScroll, useSpring, useTransform } from "framer-motion";
import styled from 'styled-components'

export const Hero = () => {
  const { scrollY } = useViewportScroll();
  const opacityRange = useTransform(scrollY, [30, 140], [1, 0]);
  const yRange = useTransform(scrollY, [30, 70], [0, 100]);
  const opacity = useSpring(opacityRange, { stiffness: 200, damping: 100 });
  const y = useSpring(yRange, { stiffness: 200, damping: 100 });
  return (
    <>
    <Section>
        <Wrapper>
          <Title style={{ opacity, y }}>
            成熟社会<br />Consotium
          </Title>
          <Img>
          </Img>
       </Wrapper>
    </Section>
    </>
  )
}

export default Hero;

export const Section = styled.section`
  height: 100vh;
`

export const Wrapper = styled.div`
  margin: 100px 0;
  padding: 0 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled(motion.h1)`
  text-align: center;
  font-weight: 800;
  font-size: 60px;
  line-height: 70px;
  color: white;
  -webkit-text-stroke: 1px black;
  margin-bottom: 50px;
  z-index:1;
`
const Img = styled.div`
  height: 400px;
  width: 500px;
  border: 2px solid #333;
  background-color: white;
  z-index:2;
`
