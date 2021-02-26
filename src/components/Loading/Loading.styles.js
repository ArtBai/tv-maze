import styled from 'styled-components'

export const Status = styled.div`
  padding: 20px;
  text-align: center;
`

export const Content = styled.div``

export const Wrapper = styled.div`
  ${Content} {
    display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
  }

  ${Status} {
    display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
  }
`
