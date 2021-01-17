import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { Section, Wrapper, Title } from './About'

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, -0.01, 0.9]
    },
  },
  hidden: { opacity: 0, y: 80 }
};

const variantsSecond = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, 0.05, -0.01, 0.9]
    },
  },
  hidden: { opacity: 0, y: 100 }
};

const variantsThird = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8,
      ease: [0.6, 0.05, -0.01, 0.9]
    },
  },
  hidden: { opacity: 0, y: 120 }
};

export const News = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) { animation.start("visible") }
  }, [animation, inView])

  return (
    <>
      <Section>
        <Wrapper>
          <Title
            style={{ textAlign: 'right' }}
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variants}
          >
            News
          </Title>
          <Text
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variantsSecond}
          >
            最新の情報を届けます。</Text>
          <NewsList
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variantsThird}
          >
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

const Text = styled(motion.p)`
  font-weight: 200;
  letter-spacing: 5px;
  mix-blend-mode: exclusion;
  font-size: 20px;
  margin-bottom: 20px;
`
const NewsList = styled(motion.div)``
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
