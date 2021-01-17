import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion ,useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { Wrapper, Title, Text, P } from './About'

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, -0.01, 0.9]
    },
  },
  hidden: { opacity: 0, y: 80 }
};

const variantsSecond = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, 0.05, -0.01, 0.9]
    },
  },
  hidden: { opacity: 0, y: 100 }
};

const variantThird = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8,
      ease: [0.6, 0.05, -0.01, 0.9]
    },
  },
  hidden: { opacity: 0, y: 120 }
};

export const Activity = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) { animation.start("visible") }
  }, [animation, inView])
  return (
    <>
      <Section>
        <Wrapper>
          <Title
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variants}
          >
            Activity
          </Title>
          <Text
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variantsSecond}
          >
            <P>地域特性を最大限に活かす知恵と工夫をこらし</P>
            <P>新しく構想し、生み出していく「創造」の時代に</P>
            <P>立ち向かわなければなりません</P>
          </Text>
          <ActivityContainer
            ef={contentRef}
            animate={animation}
            initial="hidden"
            variants={variantThird}
          >
            <Card>
              <ThumbnailContainer>
                <Thumbnail></Thumbnail>
              </ThumbnailContainer>
              <CardInfo>
                <CardTitle>年末年始のお知らせ</CardTitle>
                <CardDate>2020.12.20</CardDate>
              </CardInfo>
            </Card>
            <Card style={{marginTop:'20px'}}>
              <ThumbnailContainer>
                <Thumbnail></Thumbnail>
              </ThumbnailContainer>
              <CardInfo>
                <CardTitle>年末年始のお知らせ</CardTitle>
                <CardDate>2020.12.20</CardDate>
              </CardInfo>
            </Card>
          </ActivityContainer>
        </Wrapper>
      </Section>
    </>
  )
}

export default Activity;

export const Section = styled(motion.div)`
 margin-top: 120px;
 height: 100%;
`

const ActivityContainer = styled(motion.div)`
  margin-top: 30px;
  display: flex;
  width: 600px;
  justify-content: space-around;
`

const Card = styled.a`
`

const ThumbnailContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`
const Thumbnail = styled.div`
  height: 300px;
  width: 200px;
  background-color: black;
`
const CardInfo = styled.div`

`
const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

`
const CardDate = styled.div`
  font-size: 16px;
  font-weight: 300;
`
