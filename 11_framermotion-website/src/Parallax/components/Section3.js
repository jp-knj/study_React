import React from 'react';
import styled from 'styled-components';

export const Section3 = () => {
  return (
    <>
      <Section>
        <Container>
          <H6>働く人々</H6>
          <H1>People</H1>
          <P>職員一人ひとりに、清新な志が求められます。<br />新時代の自治体をめざして漕ぎ出していきます。</P>
          <SliderContainer>
            <Slider>
              <ImgContainer></ImgContainer>
              <InfoContainer>
                <Comment></Comment>
                <Name>Kenji Tomita</Name>
              </InfoContainer>
            </Slider>
            <ButtonLeft></ButtonLeft>
            <ButtonRight></ButtonRight>
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

const Container = styled.div`
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

const SliderContainer = styled.div``
const Slider = styled.div``
const ImgContainer = styled.div``
const InfoContainer = styled.div``
const Comment = styled.div``
const Name = styled.div``
const ButtonLeft = styled.div``
const ButtonRight = styled.div``
