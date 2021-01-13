import React from 'react'
import styled from "styled-components";

export const HomeNews = () => {
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
              <NewsTitle>年末年始のお知らせ</NewsTitle>
              <NewsDate>2020.12.20</NewsDate>
            </NewsInfo>
          </News>
          <News>
            <ThumbnailContainer>
              <Thumbnail></Thumbnail>
            </ThumbnailContainer>
            <NewsInfo>
              <NewsTitle>年末年始のお知らせ</NewsTitle>
              <NewsDate>2020.12.20</NewsDate>
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
  width: 600px;
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
  margin-bottom: 40px;
`

const NewsContainer = styled.div`
`

const News = styled.a`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
`

const ThumbnailContainer = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 180px;
  height: 120px;
  margin-right: 40px;
  overflow: hidden;
`

const Thumbnail = styled.div`
  height: 100%;
  background-size: cover;
  background-position: 50%;
  background-color: black;
`

const NewsInfo = styled.div`
`

const NewsTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`
const NewsDate = styled.p`
  font-size: 16px;
  font-weight: 300;
`

export default HomeNews;
