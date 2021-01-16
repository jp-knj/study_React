import React from 'react'
import styled from 'styled-components'
import { Section, Wrapper, Title } from './Hero'
import { P } from './About'

export const Activity = () => {
  return (
    <>
      <Section>
        <Wrapper>
          <Title>
            Activity
          </Title>
          <P>地域特性を最大限に活かす知恵と工夫をこらし<br />
          新しく構想し、生み出していく「創造」の時代に<br />
          立ち向かわなければなりません</P>
          <ActivityContainer>
            <Card>
              <ThumbnailContainer>
                <Thumbnail></Thumbnail>
              </ThumbnailContainer>
              <CardInfo>
                <CardTitle>年末年始のお知らせ</CardTitle>
                <CardDate>2020.12.20</CardDate>
              </CardInfo>
            </Card>
            <Card style={{marginTop:'20px'}}>
              <ThumbnailContainer>
                <Thumbnail></Thumbnail>
              </ThumbnailContainer>
              <CardInfo>
                <CardTitle>年末年始のお知らせ</CardTitle>
                <CardDate>2020.12.20</CardDate>
              </CardInfo>
            </Card>
          </ActivityContainer>
        </Wrapper>
      </Section>
    </>
  )
}

export default Activity;

const ActivityContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 600px;
  justify-content: space-around;
`

const Card = styled.a`
`

const ThumbnailContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`
const Thumbnail = styled.div`
  height: 300px;
  width: 200px;
  background-color: black;
`
const CardInfo = styled.div`

`
const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

`
const CardDate = styled.div`
  font-size: 16px;
  font-weight: 300;
`
