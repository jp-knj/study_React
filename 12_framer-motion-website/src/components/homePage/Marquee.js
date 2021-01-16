import React from 'react'
import styled from 'styled-components'

export const Marquee = () => {
  return (
    <MarqueeSection>
      <MarqueeText>#KenjiTomita&nbsp;&nbsp;</MarqueeText>
      <MarqueeText>#MatureSocity&nbsp;</MarqueeText>
      <MarqueeText>#KenjiTomita&nbsp;&nbsp;</MarqueeText>
      <MarqueeText>#MatureSocity&nbsp;</MarqueeText>
    </MarqueeSection>
  )
}

export default Marquee;

const MarqueeSection = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  max-width: 700px;
`

const MarqueeText = styled.span`
  text-transform: uppercase;
  will-change: transform;
  transform: translateX(0);
  white-space: nowrap;
  animation: marquee 24s linear infinite;
  font-size: 6vw;
  font-weight: 700;
  @keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
`
