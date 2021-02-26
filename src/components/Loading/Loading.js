import React from 'react'
import { Wrapper, Content, Status } from './Loading.styles'

const Loading = ({ isLoading, children }) => (
  <Wrapper isLoading={isLoading}>
    <Status>Loading...</Status>
    <Content>{children}</Content>
  </Wrapper>
)

export default Loading
