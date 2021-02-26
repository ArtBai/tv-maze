import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import * as selectors from 'store/show/selectors'
import * as actions from 'store/show/actions'
import Loading from 'components/Loading/Loading'
import { Image, Title, List, Item } from './Show.styles'

const Show = () => {
  const dispatch = useDispatch()
  const { showId } = useParams()

  const show = useSelector(selectors.showSelector)
  const episodes = useSelector(selectors.episodesSelector)
  const isLoadingShow = useSelector(selectors.isLoadingShowSelector)
  const isLoadingEpisodes = useSelector(selectors.isLoadingEpisodesSelector)

  useEffect(() => {
    dispatch(actions.fetchShowRequest(showId))
    dispatch(actions.fetchShowEpisodesRequest(showId))
  }, [dispatch, showId])

  const { name, image, summary } = show

  const description = useMemo(() => ({ __html: summary }), [summary])

  return (
    <Loading isLoading={isLoadingShow || isLoadingEpisodes}>
      <div>
        <Image src={image?.original} alt={name} />
        <Title>{name}</Title>
        <div dangerouslySetInnerHTML={description} />
        <List>
          {episodes.map(({ id, name, image }) => (
            <Item key={id} to={`/shows/${showId}/${id}`}>
              <img src={image.medium} alt={name} />
              <p>{name}</p>
            </Item>
          ))}
        </List>
      </div>
    </Loading>
  )
}

export default Show
