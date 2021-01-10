import React from 'react'
import styled, { ThemeConsumer } from "styled-components";
import { Button } from './Button';

export const Section4 = () => {
  return (
    <HeroSection>
      <Container>
        <H6>お知らせ</H6>
        <H1>News</H1>
        <P>成熟社会コンソーシアムからの最新情報をお届けします。</P>
        <NewsContainer>
          <News>
            <ThumbnailContainer>
              <Thumbnail></Thumbnail>
            </ThumbnailContainer>
            <NewsInfo>
              <NewsTitle></NewsTitle>
              <NewsDate></NewsDate>
            </NewsInfo>
          </News>
          <News>
            <ThumbnailContainer>
              <Thumbnail></Thumbnail>
            </ThumbnailContainer>
            <NewsInfo>
              <NewsTitle></NewsTitle>
              <NewsDate></NewsDate>
            </NewsInfo>
          </News>
        </NewsContainer>
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
  width: 1000px;
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
  text-align: center;
  color: white;
  -webkit-text-stroke: 0.008rem black;
  background-color: black;
`

const P = styled.p`
  font-weight: 200;
  letter-spacing: 5px;
  font-size: 20px;
`

const News = styled.a`
`

const NewsContainer = styled.div`
`

const ThumbnailContainer = styled.div`
`

const Thumbnail = styled.div`
`

const NewsInfo = styled.div`
`

const NewsTitle = styled.p``
const NewsDate = styled.p``

export default Section4;
