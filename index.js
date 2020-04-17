const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.prefix('/api')

router.post('/user', async ctx => {
  let params = ctx.request.query
  let result = {}
  if (!ctx.request.header.role || ctx.request.header.role !== 'admin') {
    result = {
      code: 401,
      msg: 'unauthorized post'
    }
    ctx.response.status = 401
  } else if (!params.name || !params.email) {
    result = {
      code: 404,
      msg: 'name或email不得为空'
    }
    ctx.response.status = 404
  } else {
    result = {
      code: 200,
      data: {
        name: params.name,
        email: params.email
      },
      msg: '上传成功'
    }
    ctx.response.status = 200
  }

  ctx.body = result
})


app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3001)
