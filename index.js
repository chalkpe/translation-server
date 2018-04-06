const Koa = require('koa')
const cors = require('@koa/cors')
const logger = require('koa-chalk-logger')
const translate = require('node-google-translate-skidz')

new Koa()
  .use(logger())
  .use(cors())
  .use(async (ctx, next) => {
    if (!ctx.query.text) return next()
    ctx.body = await translate(ctx.query)
  })
  .listen(8406)
