import React, { useRef, useState, useLayoutEffect } from "react";
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";
import styled from 'styled-components';

export const Section3 = () => {
  const { scrollY } = useViewportScroll();
  const ref = useRef();
  const [offsetTop, setOffsetTop] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return null;
    setOffsetTop(ref.current.offsetTop);
  }, [ref]);

  const opacityRange = useTransform(scrollY, [offsetTop + 2100, offsetTop + 2350], [1, 0]);
  const opacity = useSpring(opacityRange, { stiffness: 200, damping: 100 });
  return (
    <>
      <Section>
        <Container style={{ opacity }}>
          <H6>働く人々</H6>
          <H1>People</H1>
          <P>職員一人ひとりに、清新な志が求められます。<br />新時代の自治体をめざして漕ぎ出していきます。</P>
          <SliderContainer>
            <Slider>
              <ImgContainer>
              </ImgContainer>
              <InfoContainer>
                <Comment>自由で便利な生活はできるが、成長がピークに達し色々な状況を呈している社会のことである。</Comment>
                <Name></Name>
              </InfoContainer>
            </Slider>
          </SliderContainer>
        </Container>
      </Section>
    </>
  )
}

export default Section3;

const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-105%, -50%) scale(-1);
`;

const Container = styled(motion.div)`
`
const H1 = styled.h1`
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 4rem;
  color: white;
  -webkit-text-stroke: 1px black;
`

const H6 = styled.h6`
  width: 100px;
  padding: 5px;
  padding-bottom: 2px;
  margin-bottom: 3px;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 1rem;
  color: white;
  -webkit-text-stroke: 0.008rem black;
  background-color: black;
  text-align: center;

`

const P = styled.p`
  font-weight: 200;
  letter-spacing: 5px;
  font-size: 20px;
`

const SliderContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 80%;
  position: relative;
`

const Slider = styled.div`
 width: 100%;
 height: 100%;
 margin: 0 auto;
 padding: 0 4rem;
 display: flex;
 align-items: center;
 justify-content: center;
`

const ImgContainer = styled.div`
  height: 400px;
  width: 300px;
  margin: 40px 0;
  background-color: black;
  box-shadow: 5px 3px 33px -15px black;
  overflow: hidden;
`

const InfoContainer = styled.div`
  max-width: 300px;
  position: absolute;
  bottom: -30px;
  right: -40px;
  padding: 10px 20px;
  background-color: white;
`

const Comment = styled.div`
  font-size: 20px;
  font-weight: 500;
`

const Name = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  padding: 5px;
  font-weight: 700;
  color: black;
  z-index: 6;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.4;
  }
`
