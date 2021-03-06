import Koa, { DefaultState, Context } from 'koa'
import fs from 'fs'
import path from 'path'
// import Router from '@koa/router'

// import devStatic from './utils/dev-static'
// import handleVideo from './utils/handle-video'

// import favicon from 'koa-favicon'
import serverRender from './utils/server-render'

// const isDev = process.env.NODE_ENV !== 'production'
// const isDev = false

const app = new Koa();

// app.use(favicon('http://www.baidu.com/favicon.ico'));

// if (!isDev) {
  // 开发的时候用import需要放在最外面(这个文件可能没有)
  const serverEntry = require('./server-entry.js')

  let template = fs.readFileSync(path.join(__dirname, './server.ejs'), 'utf-8')
  app.use(async (ctx, next) => {
    ctx.template = template;
    ctx.serverBundle = serverEntry;
    await next()
  });
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
// } else {
//   devStatic(app)
// }

// const router = new Router<DefaultState, Context>({
//   prefix: '/api'
// });

// router.get('/video/info', handleVideo)

// app
//   .use(router.routes())
//   .use(router.allowedMethods());

// app.listen(3333)
module.exports = app.callback()
