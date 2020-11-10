import fs from 'fs'
import path from 'path'
import Koa from 'koa'
// 开发的时候用import需要放在最外面(这个文件可能没有)
// const serverEntry = require('../dist/server-entry.js')
// @ts-ignore
import serverEntry from  '../dist/server-entry.js'

let template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf-8')
export default async (ctx: Koa.Context, next: () => void) => {
  ctx.template = template;
  ctx.serverBundle = serverEntry;
  await next()
}
