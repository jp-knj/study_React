import React, { useState } from 'react'
import { motion, useViewportScroll, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";

const initialAnimate = {
  y: 20,
  opacity: 0,
};
const introAnimate = {
  y: 0,
  opacity: 1,
};

const defaultTransition = {
  ease: "easeInOut",
  duration: 0.5
};

const introVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  }
}

export const Hero = () => {
  const { scrollY } = useViewportScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const opacityRange = useTransform(scrollY, [15, 70], [1, 0]);
  const yRange = useTransform(scrollY, [15, 100], [0, 15]);
  const opacity = useSpring(opacityRange, { stiffness: 600, damping: 70 });
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  scrollY.onChange(value => {
    if (value > 100) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });
  return (
    <HeroSection>
      <Container>
        <h1>成熟社会<br />Consotium</h1>
        <TextContainer
          variants={introVariants}
          initial="initial"
          animate="enter"
          transition={defaultTransition}
          style={{ opacity, y, }}>
          <Title>
            <h6>About</h6>
          </Title>
          <Text>
            <p>こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。</p>
          </Text>
        </TextContainer>
        <ImgContainer>
          <img/>
        </ImgContainer>
      </Container>
    </HeroSection>
  )
}

const HeroSection = styled(motion.section)`
  width: 100%;
  height: 60vh;
  display: flex;
`
const Container = styled(motion.div)`
  padding: 75px 75px 75px 75px;
`

const TextContainer = styled(motion.div)`
  display:flex;
`

const Title = styled(motion.div)`
  width: 300px;
`
const Text = styled(motion.div)`
  width: 700px;
`
const ImgContainer = styled(motion.div)`
  height: 300px;
  background-color: red;

`
export default Hero;
