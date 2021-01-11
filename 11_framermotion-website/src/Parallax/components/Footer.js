import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <div>
      <FooterSection>
        <FooterLogo></FooterLogo>
        <CopyRight></CopyRight>
      </FooterSection>
    </div>
  )
}

export default Footer

const FooterSection = styled.footer`
  margin: 0 auto;
  width: 100%;
  background-color: black;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`
const FooterLogo = styled.div`
  margin:20px 0;
  height: 100px;
  width: 200px;
  background-color: white;
  color: black;
`
const CopyRight = styled.div`
  margin:20px 0;
  height: 50px;
  width: 300px;
  background-color: white;

`
