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
    // edit these ranges to make the scrolling more smooth or more sticky
    // TODO: you can programatically compute the ratios using (1200 / scrollPosY) to get the last value (2) and subtract from there
    // 1200 = height used for the RotationLengthContainer
    [
      scrollPosY,
      scrollPosY * 1.1,
      scrollPosY * 1.3,
      scrollPosY * 1.6,
      scrollPosY * 1.9,
      scrollPosY * 2
    ],
    [0, -90, -90, -180, -180, -270]
  );
  const rotate = useSpring(rotationRange, { stiffness: 400, damping: 90 });

  const [ref, { y }] = usePosition();

  useEffect(() => {
    setscrollPosY(y - 50);
  }, [y]);
  return (
    // we have to use the ref on the parent because that will give us true distance from top
    // if we use it on StickyRotatingContainer we'll get a much shorter distance since this container
    // is rotating sa we scroll but its size is fixed
    <RotationLengthContainer ref={ref}>
      <StickyRotatingContainer style={{ rotate, x: "-50%" }}>
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translate(105%, -50%)"
          }}
        >
          <Intro>something</Intro>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translate(-50%, 105%)",
            textOrientation: "sideways-right",
            writingMode: "vertical-rl"
          }}
        >
          <Intro>another thing</Intro>
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translate(-105%, -50%) scale(-1)"
          }}
        >
          <Intro>one more thing</Intro>
        </div>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translate(-50%, -105%) scale(-1)",
            textOrientation: "sideways-right",
            writingMode: "vertical-rl"
          }}
        >
          <Intro>last thing</Intro>
        </div>
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

const Intro = styled.h1`
  font-family: "Six Caps", sans-serif;
  font-size: clamp(4rem, 6rem, 7rem);
  line-height: clamp(4rem, 6rem, 7rem);
  margin: 0;
`;

const RotationLengthContainer = styled.section`
  height: 1200px; // how long you want your rotation to last
  margin: clamp(200px, 300px, 500px) 0; // making space for the last and first text to show
`;
