import React from 'react';
import styled from 'styled-components';

export const Section1 = () => {
  return (
    <>
      <Section>
        <Container>
          <H6>私たちについて</H6>
          <H1>AboutUs</H1>
          <p>こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。</p>
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
  width: 100%;
`

const H1 = styled.h1`
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 4rem;
  color: white;
  -webkit-text-stroke: 1px black;
  text-stroke: 1px black;
`

const H6 = styled.h6`
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 1rem;
  margin-bottom: -5px;
  color: white;
  -webkit-text-stroke: 0.008rem black;
  background-color: black;
  width: 29%;
  padding: 5px;
  padding-bottom: 2px;
  text-align: center;
`
