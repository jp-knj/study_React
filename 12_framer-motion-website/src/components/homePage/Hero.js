import React from 'react'
import styled from 'styled-components'

export const Hero = () => {
  return (
    <>
    <Section>
        <Wrapper>
          <Title>
            成熟社会<br />Consotium
          </Title>
          <Img>
          </Img>
       </Wrapper>
    </Section>
    </>
  )
}

export default Hero;

const Section = styled.section`
  height: 80vh;
`

const Wrapper = styled.div`
  margin: 100px 0;
  padding: 0 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  text-align: center;
  font-weight: 800;
  font-size: 60px;
  line-height: 70px;
  color: white;
  -webkit-text-stroke: 1px black;
  margin-bottom: 50px;
`
const Img = styled.div`
  height: 400px;
  width: 500px;
  border: 2px solid #333;
  opacity: 0.4;
  margin: 0;
`
