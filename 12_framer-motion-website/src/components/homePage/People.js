import React, { useEffect } from 'react'
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { Section, Wrapper, Title, Text, P } from './About'

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

export const People = () => {
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
            People
            </Title>
          <Text
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variantsSecond}
          >
            <P>職員一人ひとりに、清新な志が求められます。</P>
            <P>新時代の自治体をめざして漕ぎ出していきます。</P>
          </Text>
        </Wrapper>
      </Section>
    </>
  )
}

export default People;
