import React from 'react'
import styled from "styled-components";
import { Section } from './Hero'
import { Wrapper, Title } from './About'

export const News = () => {
  return (
    <>
      <Section>
        <Wrapper>
          <Title>News</Title>
          <Text>最新の情報を届けます。</Text>
          <NewsList>
            <Article>
              <ArticleDate>2020.1.30</ArticleDate>
              <ArticleContent>
                <CategoryName>News</CategoryName>
                <ArticleTitle>コロナ禍のため、イベント中止のお知らせ</ArticleTitle>
              </ArticleContent>
            </Article>
            <Article>
              <ArticleDate>2020.1.30</ArticleDate>
              <ArticleContent>
                <CategoryName>Events</CategoryName>
                <ArticleTitle>コロナ禍のため、イベント中止のお知らせ</ArticleTitle>
              </ArticleContent>
            </Article>
          </NewsList>
        </Wrapper>
      </Section>
    </>
  )
}

export default News;

const Text = styled.p`
  font-weight: 200;
  letter-spacing: 5px;
  mix-blend-mode: exclusion;
  font-size: 20px;
  margin-bottom: 20px;
`
const NewsList = styled.div``
const Article = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  transition: all 1s;

  &:hover {
    padding-left: 30px;
  }
`
const ArticleDate = styled.div``

const ArticleContent = styled.div`
  margin-left: 30px;
  padding: 15px 0;
  display: flex;
`
const CategoryName = styled.div`
  width: fit-content;
  font-size: 20px;
  font-weight: 700;
`
const ArticleTitle = styled.div`
 font-size: 22px;
 margin-left: 30px;
`
