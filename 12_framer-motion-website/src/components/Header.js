import React from 'react'
import styled from 'styled-components'
import { BiMenu } from "react-icons/bi";

export const Header = () => {
  return (
    <>
      <HeaderSection>
        <HeaderWrapper>
          <Menu><BiMenu size={32}/></Menu>
        </HeaderWrapper>
      </HeaderSection>
    </>
  )
}

export default Header

const HeaderSection = styled.header`
  width: 100%;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  height: 90px;
  padding-right: 80px;
  max-width: 1280px;
`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  height: 80px;
  width: 80px;
`
