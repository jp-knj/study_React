import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion ,useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { Wrapper, Title, Text, P } from './About'

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
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: .4, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: { opacity: 0, y: 82 },
            }}
          >Activity</Title>
          <Text
            ef={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: .8, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: { opacity: 0, y: 100 },
            }}
          >
            <P>地域特性を最大限に活かす知恵と工夫をこらし</P>
            <P>新しく構想し、生み出していく「創造」の時代に</P>
            <P>立ち向かわなければなりません</P>
          </Text>
          <ActivityContainer
            ef={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] },
              },
              hidden: { opacity: 0, y: 120 },
            }}
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

const Section = styled(motion.div)`
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
