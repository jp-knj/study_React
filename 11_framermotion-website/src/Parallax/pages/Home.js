import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";
import styled from "styled-components";
import HomeHero from "../components/homePage/HomeHero";
import HomeAbout from "../components/homePage/HomeAbout";
import HomeActivity from "../components/homePage/HomeActivity";
import HomePeople from "../components/homePage/HomePeople";
import HomeNews from "../components/homePage/HomeNews";
import "../styles.css";
import { usePosition } from "../usePosition";

export const Home = () => {
  const { scrollY } = useViewportScroll();
  const [scrollPosY, setscrollPosY] = useState(false);

  const rotationRange = useTransform(
    scrollY,
    [
      scrollPosY,
      scrollPosY * 1.3, scrollPosY * 1.6,
      scrollPosY * 1.6, scrollPosY * 2.1,
      scrollPosY * 2.4,
    ],
    [0, -90, -90, -180, -180, -230]
  );
  const rotate = useSpring(rotationRange, { stiffness: 900, damping: 400 });
  const [ref, { y }] = usePosition();

  useEffect(() => {
    setscrollPosY(y - 50);
  }, [y]);
  return (
    <>
      <HomeHero />
      <RotationLengthContainer ref={ref}>
        <StickyRotatingContainer style={{ rotate, x: "-50%" }}>
          <HomeAbout />
          <HomeActivity />
          <HomePeople />
        </StickyRotatingContainer>
      </RotationLengthContainer>
      <HomeNews />
    </>
  );
}

export default Home;

const StickyRotatingContainer = styled(motion.div)`
  position: sticky;
  top: 10px;
  border: 1px yellow solid;
  border-radius: 50%;
  height: 800px;
  width: 800px;
  background-color: black;
`;

const RotationLengthContainer = styled.section`
  height: 1800px; // how long you want your rotation to last
  margin: clamp(100px, 150px, 300px) 0; // making space for the last and first text to show */
  margin-bottom: 200px;
`;
