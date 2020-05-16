// 业务b接口
function b(ctx) {
    ctx.body = {
        msg: 'hello from b',
    }
}

// 注：在引入的时候要使用大括号{b}引入b
module.exports = {
    b,
}