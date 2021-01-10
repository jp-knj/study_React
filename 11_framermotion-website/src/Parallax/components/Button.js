import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export const Button = () => {
  return (
    <Btn
      whileHover={{ width: '200px' }}
    >
      <FiArrowRight size={30} />
    </Btn>

  )
};

const Btn = styled(motion.div)`
  height: 50px;
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50px;
  background-color: black;
  color: white;
`
