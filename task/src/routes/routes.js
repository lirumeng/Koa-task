// 合并路由
import combineRouters from 'koa-combine-routers'

import aroutes from './aRouter'
import broutes from './bRouter'

module.exports = combineRouters(aroutes, broutes)