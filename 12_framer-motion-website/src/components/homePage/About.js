import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export const About = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) { animation.start("visible") }}, [animation, inView])
  return (
    <>
      <Section>
        <Wrapper>
          <Title
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: { opacity: 0, y: 72 },
            }}
          >
          About</Title>
          <Text ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: { opacity: 0, y: 72 },
            }}>
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

export const Section = styled(motion.div)`height: 80vh;`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 0;
  padding: 0 100px;
`
export const Title = styled(motion.h1)`
  width: fit-content;
  font-weight: 800;
  font-size: 60px;
  line-height: 70px;
  color: white;
  -webkit-text-stroke: 1px black;
  margin-bottom: 30px;
  z-index:1;
`

export const Text = styled(motion.div)``

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
