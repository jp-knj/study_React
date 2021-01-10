import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";
import styled from "styled-components";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
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
      scrollPosY * 1.6,scrollPosY * 2.1,
      scrollPosY * 2.4
    ],
    [0, -90, -90, -180, -180, -180]
  );
  const rotate = useSpring(rotationRange, { stiffness: 1500, damping: 200 });
  const [ref, { y }] = usePosition();

  useEffect(() => {
    setscrollPosY(y - 50);
  }, [y]);
  return (
    <RotationLengthContainer ref={ref}>
      <StickyRotatingContainer style={{ rotate, x: "-50%" }}>
        <Section1 />
        <Section2 />
        <Section3 />
      </StickyRotatingContainer>
    </RotationLengthContainer>
  );
}

const StickyRotatingContainer = styled(motion.div)`
  position: sticky;
  top: 10px;
  border: 1px red solid;
  border-radius: 50%;
  height: 800px;
  width: 800px;
  background-color: black;
`;

const RotationLengthContainer = styled.section`
  height: 1800px; // how long you want your rotation to last
  margin: clamp(200px, 300px, 800px) 0; // making space for the last and first text to show */
  margin-bottom: 200px;
`;
