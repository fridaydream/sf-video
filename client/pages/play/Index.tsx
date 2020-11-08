import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import queryString from 'query-string'
import Helmet from 'react-helmet'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Player, PlaybackRateMenuButton, ControlBar } from 'video-react';

import { observer } from 'mobx-react-lite'

import {
  QueryProps,
  requestInitialData
} from '@/utils/initialdata'

import {
  useStores,
} from '@/store/use-stores'

import {
  InitialStoresProps
} from '@/store/types'

const Play = () => {
  const stores= useStores()
  const { videoStore } = stores;
  const { video } = videoStore;

  let id = ''
  if (typeof window !== 'undefined') {
    id = queryString.parse(window.location.search).id as string
  }

  requestInitialData({
    stores,
    query: {
      id
    }
  }, Play)
  const playing = video.playing

  if (!playing.id) {
    return <>
      loading video
    </>
  }
  return (
    <Container maxWidth="sm">
      <Helmet>
        <title>{playing.title}</title>
      </Helmet>
      <Card>
        <Player
          playsInline
          poster={playing.poster}
          src={playing.url}
        >
          <ControlBar>
            <PlaybackRateMenuButton rates={[2, 1.75, 1.5, 1.25, 1, 0.75, 0.5, 0.25]} order={7.1} />
          </ControlBar>
        </Player>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {playing.author}：{playing.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {playing.date}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

Play.getInitialProps = async ({ stores, query }: InitialStoresProps & QueryProps) => {
  await stores.videoStore.getVideoDetail({...query})
}

export default observer(Play)
