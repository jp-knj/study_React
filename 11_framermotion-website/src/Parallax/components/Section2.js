import React from 'react';
import styled from 'styled-components';

export const Section2 = () => {
  return (
    <>
      <Section>
        <Container>
          <H6>活動報告について</H6>
          <H1>Activity</H1>
          <p>こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。</p>
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
