import Koa from 'koa'

import { videoList } from '../../config/video-config'

const handleVideo = async (ctx: Koa.Context) => {
  const id = ctx.query.id
  // 如果没有id，查询所有
  if (!id) {
    return ctx.body = {
      data: videoList,
      errno: 0
    }
  }
  const result = videoList.find(li => li.id === id)
  if (result) {
    return ctx.body = {
      data: result,
      errno: 0
    }
  }
  return ctx.body = {
    message: 'id is not exist',
    errno: 4004
  }
}

export default handleVideo;
