import Router from 'koa-router'
import a from '../api/a'

const router = new Router()

router.get('/a', a)

module.exports = router