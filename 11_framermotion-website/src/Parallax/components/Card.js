import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'


export const Card = () => {
  return (
    <Cards>
      <CardImg/>
      <CardTitle></CardTitle>
        <CardText></CardText>
      <Button/>
    </Cards>
  );
};

const Cards = styled.div`
`

const CardImg = styled.div`
`

const CardTitle = styled.div`
`

const CardText = styled.div`
`
