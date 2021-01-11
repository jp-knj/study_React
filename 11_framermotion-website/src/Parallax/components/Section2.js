import styled from 'styled-components';
import React, { useRef, useState, useLayoutEffect } from "react";
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";

export const Section2 = () => {
  const { scrollY } = useViewportScroll();
  const ref = useRef();
  const [offsetTop, setOffsetTop] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return null;
    setOffsetTop(ref.current.offsetTop);
  }, [ref]);

  const opacityRange = useTransform(scrollY, [offsetTop + 1600, offsetTop + 1750], [1, 0]);
  // const yRange = useTransform(scrollY, [offsetTop + 1150, offsetTop + 1400], [0, 100]);

  const opacity = useSpring(opacityRange, { stiffness: 200, damping: 100 });
  // const y = useSpring(yRange, { stiffness: 200, damping: 100 });
  return (
    <>
      <Section>
        <Container ref={ref} style={{ opacity }}>
          <H6>活動報告について</H6>
          <H1>Activity</H1>
          <P>地域特性を最大限に活かす知恵と工夫をこらし<br />
          新しく構想し、生み出していく「創造」の時代に<br />
          立ち向かわなければなりません</P>
          <ActivityContainer>
            <Card>
              <ThumbnailContainer>
                <Thumbnail></Thumbnail>
              </ThumbnailContainer>
              <CardInfo>
                <CardTitle>年末年始のお知らせ</CardTitle>
                <CardDate>2020.12.20</CardDate>
              </CardInfo>
            </Card>
            <Card style={{ marginRight: "40px" }}>
              <ThumbnailContainer>
                <Thumbnail></Thumbnail>
              </ThumbnailContainer>
              <CardInfo>
                <CardTitle>年末年始のお知らせ</CardTitle>
                <CardDate>2020.12.20</CardDate>
              </CardInfo>
            </Card>
          </ActivityContainer>
        </Container>
      </Section>
    </>
  )
}

export default Section2;

const Section = styled.section`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 105%);
  text-orientation: sideways-right;
  writing-mode: vertical-rl;
`;

const Container = styled(motion.div)`
 height: 800px;
`

const H1 = styled.h1`
  margin-left: 20px;
  font-weight: 800;
  font-size: 4rem;
  color: white;
  -webkit-text-stroke: 1px black;
`

const H6 = styled.h6`
  margin-right: 20px;
  padding: 5px;
  text-align: center;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 1rem;
  height: 170px;
  color: white;
  -webkit-text-stroke: 0.008rem black;
  background-color: black;
`

const P = styled.p`
  margin: auto 0;
  margin-left: 10px;
  font-weight: 200;
  letter-spacing: 5px;
  font-size: 20px;
  height: auto;
`

const ActivityContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Card = styled.a`
 height: 250px;
 width: 100%;
`

const ThumbnailContainer = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 250px;
  height: 200px;
  overflow: hidden;
`
const Thumbnail = styled.div`
  width: 100%;
  background-size: cover;
  background-position: 50%;
  background-color: black;
`
const CardInfo = styled.div`
  margin: 0 20px;
`
const CardTitle = styled.div`
  height: auto;
  font-size: 24px;
  font-weight: 400;
  margin-left: 10px;
`
const CardDate = styled.div`
  height: auto;
  font-size: 16px;
  font-weight: 300;
`
