import React from 'react';
import styled from 'styled-components';

export const Section1 = () => {
  return (
    <>
      <Section>
        <Container>
          <H6>私たちについて</H6>
          <H1>About</H1>
          <P>精神的豊かさや生活の</P>
          <P>質の向上を重視する、平和で自由な社会へめざす。</P>
          <P>我々は、<Str>高齢者特有の法的な保障</Str>について考える</P>
          <P>高齢者にかかわる法的課題全般について専門家が</P>
          <P>ともに検討し、情報を発信します</P>
        </Container>
      </Section>
    </>
  )
}

export default Section1;

const Section = styled.section`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(105%, -50%);
`;

const Container = styled.div`
  height: 300px;
  width: 700px;
`

const H1 = styled.h1`
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 4rem;
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
  text-align: center;
  width: 150px;
  padding: 5px;
  padding-bottom: 2px;
  margin-bottom: 3px;
`

const P = styled.p`
  font-weight: 200;
  letter-spacing: 5px;
  font-size: 20px;
  margin-bottom: 20px;
`

const Str = styled.strong`
  background-color: black;
  color: white;
  padding: 3px 5px;
  margin: 0 3px;
`