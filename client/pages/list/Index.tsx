import React from 'react'
// import { observer } from 'mobx-react-lite'
import Helmet from 'react-helmet'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { observer } from 'mobx-react-lite'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
  useStores,
} from '@/store/use-stores'

import {
  InitialStoresProps
} from '@/store/types'

import {
  requestInitialData
} from '@/utils/initialdata'

const useStyles = makeStyles({
  // root: {
  //   flexGrow: 1,
  // },
  root: {
    width: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const List = () => {
  const stores = useStores()
  const { videoStore } = stores
  const history = useHistory();
  const classes = useStyles();
  requestInitialData({
    stores,
  }, List)
  return (
    <>
      <Helmet>
        <title>视频列表页</title>
      </Helmet>
      <Grid item lg={12}>
        <Grid container spacing={4} justify="center">
          {videoStore.video.list.map((item) => (
            <Grid key={item.id} item onClick={() => history.push(`/playing?id=${item.id}`)}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="share image"
                    height="300"
                    image={
                      item.poster
                    }
                    title="share image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {
                        item.author
                      }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {
                        item.title
                      }
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

List.getInitialProps = async ({ stores }: InitialStoresProps) => {
  await stores.videoStore.getVideo()
}

export default observer(List)
