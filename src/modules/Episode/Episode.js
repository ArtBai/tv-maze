import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as selectors from 'store/episode/selectors'
import * as actions from 'store/episode/actions'
import Loading from 'components/Loading/Loading'
import { Image, Title } from './Episode.styles'

const Episode = () => {
  const dispatch = useDispatch()
  const { episodeId } = useParams()

  const episode = useSelector(selectors.episodeSelector)
  const isLoadingEpisode = useSelector(selectors.isLoadingEpisodeSelector)

  useEffect(() => {
    dispatch(actions.fetchEpisodeRequest(episodeId))
  }, [dispatch, episodeId])

  const { name, image, summary } = episode

  const description = useMemo(() => ({ __html: summary }), [summary])

  return (
    <Loading isLoading={isLoadingEpisode}>
      <div>
        <Image src={image?.original} alt={name} />
        <Title>{name}</Title>
        <div dangerouslySetInnerHTML={description} />
      </div>
    </Loading>
  )
}

export default Episode
