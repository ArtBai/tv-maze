import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Image = styled.img`
  display: block;
  height: auto;
  margin-bottom: 20px;
  max-width: 500px;
`

export const List = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`

export const Item = styled(Link)`
  flex-basis: calc(100% / 4);
  padding: 10px;
  text-decoration: none;
  color: black;
`

export const Title = styled.h1`
  margin-bottom: 10px;
`
