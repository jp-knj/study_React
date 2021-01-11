import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <div>
      <Footer>
        <FooterLogo></FooterLogo>
        <FooterMenu>
          <MenuList></MenuList>
          <MenuList></MenuList>
          <MenuList></MenuList>
        </FooterMenu>
        <CopyRight></CopyRight>
      </Footer>
    </div>
  )
}

export default Footer

const Footer = styled.footer``
const FooterMenu = styled.ul``
const MenuList = styled.li``
const CopyRight = styled.div``
