import React from 'react'
import styled from "styled-components";
import { Button } from './Button';

export const Section4 = () => {
  return (
    <HeroSection>
      <Container>
        <H6>お知らせ</H6>
        <H1>News</H1>
        <p>こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。こちらはテキストになります。</p>
        <Button/>
      </Container>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  margin: 0 auto;
  padding: 0 200px;
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

export default Section4;
