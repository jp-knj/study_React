import React from 'react';
import styled from 'styled-components';

export const Section3 = () => {
  return (
    <>
      <Section>
        <Container>
          <H6>働く人々</H6>
          <H1>People</H1>
          <p>こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。</p>
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
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 1rem;
  margin-bottom: -5px;
  color: white;
  -webkit-text-stroke: 0.008rem black;
  background-color: black;
  padding: 5px;
  padding-bottom: 2px;
  margin-bottom: 3px;
`
