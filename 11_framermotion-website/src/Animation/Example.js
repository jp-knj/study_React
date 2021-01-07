import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  background: white;
  border-radius: 30px;
  width: 150px;
  height: 150px;
`;

export const Container = styled.div`
  background: white;
  border-radius: 30px;
  width: 150px;
  height: 150px;
`

export const Example = () => (
    <Box animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
      transition={{
        duration: 1
      }}
    />
);
