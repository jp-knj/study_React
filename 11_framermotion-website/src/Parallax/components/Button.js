import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";

export const Button = () => {
  return (
    <ButtonStyle whileHover={{ scale: 1.1 }}>
      Read More</ButtonStyle>
  )
};

const ButtonStyle = styled(motion.button)`
  width: 130px;
  height: 50px;
	margin: 0 4px;
	border-radius: 15px;
	border: 2px solid black;
  background: black;
  color: white;
  text-align: center;
`
