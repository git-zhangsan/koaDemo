/*
* @Author: zhanghuiming
* @Date:   2017-12-15 16:20:44
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 16:24:04
*/
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
	let n = Number(ctx.cookies.get('view') || 0) + 1;
	ctx.cookies.set('view',n);
	ctx.response.body = n + 'views';
}

app.use(main);
app.listen(3000);