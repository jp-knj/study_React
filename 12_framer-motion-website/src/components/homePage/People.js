import React from 'react'
import { Section, Title, Wrapper } from './Hero'
import { P } from './About'

export const People = () => {
  return (
    <>
      <Section>
        <Wrapper>
          <Title style={{ textAlign: 'right'}}>People</Title>
          <P>職員一人ひとりに、清新な志が求められます。<br />
          新時代の自治体をめざして漕ぎ出していきます。</P>
        </Wrapper>
      </Section>
    </>
  )
}

export default People;
