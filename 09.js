/*
* @Author: zhanghuiming
* @Date:   2017-12-15 14:18:30
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 14:23:31
*/
var Koa = require('koa');
var app = new Koa();

const One = (ctx,next) => {
	console.log('===>> One ');
	ctx.response.body = 'One';
	next();
	console.log('===>> One ');
	ctx.response.body = 'One';
}

const Two = (ctx,next) => {
	console.log('===>> Two ');
	ctx.response.body = 'Two';
	next();
	console.log('===>> Two ');
}

const Three = (ctx,next) => {
	console.log('===>> Three ');
	ctx.response.body = 'Three';
	next();
	console.log('===>> Three ');
}

app.use(One);
app.use(Two);
app.use(Three);
app.listen(3000);