import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Section>
      <HeaderContainer>
        <Menu>
          <Button></Button>
          <Button></Button>
        </Menu>
      </HeaderContainer>
    </Section>
  )
}
export default Header;

const Section = styled.header`
  background-color: transparent;
  position: absolute;
  padding: 0 88px;
  width: 100%;
  z-index: 8;
`

const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Menu = styled.div`

`
const Button = styled.span`
  height: 3px;
  width: 30px;
  margin: 6px;
  display: block;
  background-color: black;
`
