import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Item = styled(Link)`
  flex-basis: calc(100% / 4);
  text-decoration: none;
  color: black;
`

export const Image = styled.div`
  display: block;
  background-color: #eaeaea;
  background-image: url(${({ source }) => source});
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Title = styled.p`
  padding: 10px;
  margin: 0;
`
