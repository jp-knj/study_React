import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

export const Section2 = () => {
  return (
    <>
      <Section>
        <Container>
          <H6>活動報告について</H6>
          <H1>Activity</H1>
          <P>地域特性を最大限に活かす知恵と工夫をこらし<br />
          新しく構想し、生み出していく「創造」の時代に<br />
          立ち向かわなければなりません</P>
          <Inner>
            <Card />
            <Card />
          </Inner>
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

const Container = styled.div`
 height: 900px;
`

const Inner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const H1 = styled.h1`
  margin-left: 20px;
  font-weight: 800;
  font-size: 4rem;
  color: white;
  -webkit-text-stroke: 1px black;
`

const H6 = styled.h6`
  margin-left: -5px;
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
  margin-left: 40px;
  font-weight: 200;
  letter-spacing: 5px;
  font-size: 20px;
  height: auto;
`
