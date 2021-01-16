import React from 'react'
import styled from 'styled-components'
import { useViewportScroll, useSpring, useTransform } from "framer-motion";
import { Section } from './Hero'

export const About = () => {
  const { scrollYProgress } = useViewportScroll()
  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1])
  const yRange = useTransform(scrollYProgress, [30, 70], [0, 100]);
  const opacity = useSpring(frameOpacity, { stiffness: 400, damping: 100 });
  const y = useSpring(yRange, { stiffness: 200, damping: 100 });

  return (
    <>
      <Section>
        <Wrapper style={{ opacity, y }}>
        <Title>About Us</Title>
          <Text>
            <P>精神的豊かさや生活の</P>
            <P>質の向上を重視する、平和で自由な社会へめざす。</P>
            <P>我々は、<Str>高齢者特有の法的な保障</Str>について考える</P>
            <P>高齢者にかかわる法的課題全般について専門家が</P>
            <P>ともに検討し、情報を発信します</P>
        </Text>
      </Wrapper>
    </Section>
    </>
  )
}

export default About

const Wrapper = styled.div`
  margin: 100px 0;
  padding: 0 200px;
`
const Title = styled.h1`
  font-weight: 800;
  font-size: 50px;
  line-height: 70px;
  color: white;
  -webkit-text-stroke: 1px black;
  margin-bottom: 30px;
  z-index:1;
`

export const Text = styled.div``

export const P = styled.p`
  font-weight: 200;
  letter-spacing: 5px;
  mix-blend-mode: exclusion;
  font-size: 20px;
  margin-bottom: 20px;
`

export const Str = styled.strong`
  background-color: #00053a;
  color: white;
  padding: 3px 5px;
  margin: 0 3px;
`
