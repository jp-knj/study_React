import React, { useEffect, useRef} from 'react'
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const SideTile = styled.div`
  position: fixed;
	top: 0;
	margin-top: 30px;
	left: 20px;
	width: 100%;
	height: 300%;
	text-align: left;
	font-family: 'Muli', sans-serif;
	-webkit-writing-mode: vertical-lr;
	writing-mode: vertical-lr;
  color:black;
  background-color: black;
	font-size: 18vw;
	line-height: 1;
	color: rgba(200,200,200,.1);
	background: linear-gradient(90deg, rgba(200,200,200,0), rgba(200,200,200,0.35));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: 900;
	z-index: 1;
`;

const HeroSection = styled.div`
  position: relative;
	width: 100%;
  height: 100vh;
	display: block;
  width: 100%;
	overflow-x: hidden;
	background-color: #1f2029;
  color: #c4c3ca;
	font-family: 'Muli', sans-serif;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

const Paragraph = styled.p`
  letter-spacing: 2px;
	font-size: 22px;
	font-weight: 700;
	padding: 0;
  color: #6f598f;
  text-align:center;
`

const Heading = styled.h1`
  font-size: 5vw;
  letter-spacing: 8px;
	font-weight: 900;
  color: #fff;
	line-height: 1;
  text-align:center;
  text-transform: uppercase;
`

const ImgSection = styled.div`
  position: relative;
	width: 100%;
  height: 100vh;
	display: block;
  width: 100%;
	overflow-x: hidden;
	background-color: #1f2029;
  color: #c4c3ca;
  z-index: 100;
`

const ImgWrapper = styled.div`
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index:2;
`

const Img = styled.div`
  position: absolute;
	width: calc(100% - 80px);
  max-width: 950px;
	background-size: cover;
	background-position:center center;
	background-repeat:no-repeat;
	top: 50%;
	left: 50%;
	overflow: hidden;
	list-style:none;
  border-radius: 20px;
  box-shadow: 0 0 50px rgba(0,0,0,.6);
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	-webkit-transition: all 300ms linear;
	transition: all 300ms linear;
  height: 500px;
`
const calc = o => `translateY(${o * 1}px)`;
export const Hero = () => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div ref={ref}>
      <SideTile>work</SideTile>
      <HeroSection>
        <Wrapper style={{ transform: offset.interpolate(calc) }}>
          <Paragraph>We do magic</Paragraph>
          <Heading>成熟社会<br />Consotium</Heading>
        </Wrapper>
      </HeroSection>
      <ImgSection>
        <ImgWrapper>
          <Img><img src="http://www.ivang-design.com/svg-load/parallax/light.jpg" alt="" /></Img>
        </ImgWrapper>
      </ImgSection>
    </div>
  );
};
export default Hero;

/*

      <div class="section full-height z-bigger">
  <ul class="case-study-wrapper">
    <li class="case-study-name">
      <a href="#" class="hover-target">light</a>
    </li>
    <li class="case-study-name">
      <a href="#" class="hover-target">flare</a>
    </li>
    <li class="case-study-name">
      <a href="#" class="hover-target">nature</a>
    </li>
    <li class="case-study-name">
      <a href="#" class="hover-target">fire</a>
    </li>
  </ul>
  <ul class="case-study-images">
    <li>
      <div class="img-hero-background">
        <img src="http://www.ivang-design.com/svg-load/parallax/light.jpg" alt="">
      </div>
      <div class="hero-number-back">01</div>
      <div class="hero-number">01</div>
      <div class="hero-number-fixed">04</div>
      <div class="case-study-title">graphic design, interaction</div>
    </li>
    <li>
      <div class="img-hero-background">
        <img src="http://www.ivang-design.com/svg-load/parallax/flare.jpg" alt="">
      </div>
      <div class="hero-number-back">02</div>
      <div class="hero-number">02</div>
      <div class="case-study-title">advertising, art direction</div>
    </li>
    <li>
      <div class="img-hero-background">
        <img src="http://www.ivang-design.com/svg-load/parallax/nature.jpg" alt="">
      </div>
      <div class="hero-number-back">03</div>
      <div class="hero-number">03</div>
      <div class="case-study-title">photography, retouching</div>
    </li>
    <li>
      <div class="img-hero-background">
        <img src="http://www.ivang-design.com/svg-load/parallax/fire.jpg" alt="">
      </div>
      <div class="hero-number-back">04</div>
      <div class="hero-number">04</div>
      <div class="case-study-title">photography, advertising</div>
    </li>
  </ul>
</div>
*/
