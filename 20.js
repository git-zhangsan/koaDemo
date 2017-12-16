/*
* @Author: zhanghuiming
* @Date:   2017-12-15 16:40:16
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 16:51:09
*/
const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

const main = ctx => {
	const body = ctx.request.body;
	if(!body.name) ctx.throw(400,'.name required  ');
	ctx.body = {name:body.name}
};

app.use(koaBody());
app.use(main);
app.listen(3000);