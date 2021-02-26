import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from 'store/shows/actions'
import * as selectors from 'store/shows/selectors'
import Loading from 'components/Loading/Loading'
import { Grid, Item, Image, Title } from './Shows.styles'

const Shows = () => {
  const dispatch = useDispatch()

  const shows = useSelector(selectors.showsSelector)
  const isLoadingShows = useSelector(selectors.isLoadingShowsSelector)

  useEffect(() => {
    dispatch(actions.fetchShowsRequest())
  }, [dispatch])

  return (
    <Loading isLoading={isLoadingShows}>
      <Grid>
        {shows.map(({ id, name, image }) => (
          <Item to={`/shows/${id}`} key={id}>
            <Image source={image.original} />
            <Title>{name}</Title>
          </Item>
        ))}
      </Grid>
    </Loading>
  )
}

export default Shows
