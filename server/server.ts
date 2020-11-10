import Koa, { DefaultState, Context } from 'koa'
import fs from 'fs'
import path from 'path'
import Router from '@koa/router'

import devStatic from './utils/dev-static'
import handleVideo from './utils/handle-video'

import addFile from './file'
// import favicon from 'koa-favicon'
import serverRender from './utils/server-render'


// const isDev = process.env.NODE_ENV !== 'production'
const isDev = false

const app = new Koa();

// app.use(favicon('http://www.baidu.com/favicon.ico'));

if (!isDev) {
  app.use(addFile);
  app.use(serverRender);
  // app.use(async (ctx, next) => {
  //   console.log('ctx.path', ctx.path)
  //   if (ctx.path.indexOf('/public/') === 0) {
  //     ctx.path = ctx.path.slice('/public/'.length);
  //     await send(ctx, ctx.path, {
  //       index: 'index.html',
  //       root: path.join(__dirname, '../dist')
  //     })
  //   }
  //   await next()
  // })
} else {
  devStatic(app)
}

// const router = new Router<DefaultState, Context>({
//   prefix: '/api'
// });

// router.get('/video/info', handleVideo)

// app
//   .use(router.routes())
//   .use(router.allowedMethods());

app.listen(3333)
module.exports = app.callback()
