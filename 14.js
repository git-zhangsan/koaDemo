/*
* @Author: zhanghuiming
* @Date:   2017-12-15 14:59:03
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 15:00:11
*/
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
	ctx.throw(500)
}

app.use(main);
app.listen(3000);