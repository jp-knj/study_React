import React from 'react'
import { motion, useViewportScroll, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";

export const Hero = () => {
  const { scrollY } = useViewportScroll();
  const opacityRange = useTransform(scrollY, [30, 140], [1, 0]);
  const yRange = useTransform(scrollY, [30, 70], [0, 100]);

  const opacity = useSpring(opacityRange, { stiffness: 200, damping: 100 });
  const y = useSpring(yRange, { stiffness: 200, damping: 100 });

  return (
    <HeroSection>
      <Container style={{ opacity, y }}>
        <H1>成熟社会<br/>Consotium</H1>
      </Container>
      <ImgContainer>
      </ImgContainer>
    </HeroSection>
  )
}

const HeroSection = styled(motion.section)`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Container = styled(motion.div)`
  margin: 100px auto 50px auto;

`

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 8rem;
  line-height: 7rem;
  color: white;
  -webkit-text-stroke: 1px black;
`

const H6 = styled.h6`
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 1rem;
  margin-bottom: -5px;
  color: white;
  -webkit-text-stroke: 0.008rem black;
  background-color: black;
  padding: 5px;
  padding-bottom: 2px;
  margin-bottom: 3px;
`

const ImgContainer = styled.div`
  margin: 0 auto;
  height: 600px;
  width: 100%;
  background-color: black;
  z-index:2;
`
export default Hero;
