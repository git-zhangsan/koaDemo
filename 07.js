/*
* @Author: zhanghuiming
* @Date:   2017-12-15 14:07:25
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 14:10:42
*/
var Koa = require('koa')
var app = new Koa();

const main = ctx =>{
	console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
	ctx.response.body = 'Hello World!'
}

app.use(main);
app.listen(3000);