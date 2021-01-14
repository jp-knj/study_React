import React from 'react'
import styled from 'styled-components'

export const HomeMarquee = () => {
  return (
    <Section>
      <Marquees>
        <Marquee>
          <Span># Mature Society  # Tomita Kenji  # Mature Society  # Tomita Kenji  # Mature Society  # Tomita Kenji  # Mature Society # Tomita</Span>
          <Span># Mature Society  # Tomita Kenji  # Mature Society  # Tomita Kenji  # Mature Society  # Tomita Kenji  # Mature Society # Tomita</Span>
        </Marquee>
      </Marquees>
      <Marquees>
        <LeftMarquee>
          <Span># 成熟社会コンソーシアム # 冨田健治 # 成熟社会コンソーシアム # 冨田健治 # 成熟社会コンソーシアム # 冨田健治 # 成熟社会コンソーシアム # 冨田健治</Span>
          <Span># 成熟社会コンソーシアム # 冨田健治 # 成熟社会コンソーシアム # 冨田健治 # 成熟社会コンソーシアム # 冨田健治 # 成熟社会コンソーシアム # 冨田健治</Span>
        </LeftMarquee>
      </Marquees>
    </Section>
  )
}
const Section = styled.section`
  margin-top: -230px;
  margin-bottom: 100px;
`

const Marquees = styled.section`
  height: 100px;
  width: 100%;
  overflow: hidden;
  position: relative;
`

const Marquee = styled.div`
  display: block;
  width: 200%;
  height: 100px;
  position: absolute;
  overflow: hidden;
  animation: marquee 32s linear infinite;
  @keyframes marquee {
  0% { left: 0; }
  100% { left: -100%; }
}
`

const Span = styled.span`
  float: left;
  width: 50%;
  font-size: 3vw;
  font-weight: 900;
  mix-blend-mode: difference;
  z-index: 20;
`

const LeftMarquee = styled.div`
  display: block;
  width: 200%;
  height: 100px;
  position: absolute;
  overflow: hidden;
  animation: rightmarquee 32s linear infinite;
  @keyframes rightmarquee {
  0% { right: 0; }
  100% { right: -100%; }
}
`
