import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";
import styled from "styled-components";
import "./styles.css";
import { usePosition } from "./usePosition";

export default function App() {
  const { scrollY } = useViewportScroll();
  const [scrollPosY, setscrollPosY] = useState(false);

  const rotationRange = useTransform(
    scrollY,
    [
      scrollPosY,
      scrollPosY * 1.3,scrollPosY * 1.6,
      scrollPosY * 1.9,scrollPosY * 2.1,
      scrollPosY * 2.4
    ],
    [0, -90, -90, -180, -180, -180]
  );
  const rotate = useSpring(rotationRange, { stiffness: 900, damping: 100 });
  const [ref, { y }] = usePosition();

  useEffect(() => {
    setscrollPosY(y - 50);
  }, [y]);
  return (
    <RotationLengthContainer ref={ref}>
      <StickyRotatingContainer style={{ rotate, x: "-50%" }}>
        <Section1>
          <Intro>something</Intro>
        </Section1>
        <Section2>
          <Intro>another thing</Intro>
        </Section2>
        <Section3>
          <Intro>one more thing</Intro>
        </Section3>
      </StickyRotatingContainer>
    </RotationLengthContainer>
  );
}

const StickyRotatingContainer = styled(motion.div)`
  position: sticky;
  top: 10px;
  border: 1px rgba(0, 0, 0, 0.4) solid;
  border-radius: 50%;
  height: 500px;
  width: 500px;
`;

const Section1 = styled.section`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(105%, -50%);
`;

const Section2 = styled.section`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 105%);
  text-orientation: sideways-right;
  writing-mode: vertical-rl;
`;

const Section3 = styled.section`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-105%, -50%) scale(-1);
`;

const Intro = styled.h1`
  font-family: "Six Caps", sans-serif;
  font-size: clamp(4rem, 6rem, 7rem);
  line-height: clamp(4rem, 6rem, 7rem);
  margin: 0;
`;

const RotationLengthContainer = styled.section`
  height: 1200px; // how long you want your rotation to last
  margin: clamp(200px, 300px, 800px) 0; // making space for the last and first text to show */
`;
