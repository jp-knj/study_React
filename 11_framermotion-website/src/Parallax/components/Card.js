import React from 'react'
import styled from 'styled-components'
import { FiArrowRight } from "react-icons/fi";

export const Card = () => {
  return (
    <Cards>
      <CardImg/>
      <CardTitle>成長社会から成熟社会</CardTitle>
      <CardText><FiArrowRight /></CardText>
    </Cards>
  );
};

const Cards = styled.div`
 background-color: red;
 height: 250px;
 width: 400px;
`

const CardImg = styled.div`
 background-color: green;
 height: 250px;
 width: 300px;
 margin-left: 8px;
`

const CardTitle = styled.div`
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 18px;
`

const CardText = styled.div`
  height: 40px;
  width: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`
