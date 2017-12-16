/*
* @Author: zhanghuiming
* @Date:   2017-12-15 14:14:33
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 14:17:34
*/
var Koa = require('koa');
var app = new Koa();

const Logger = (ctx,next)=>{
	console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
	next();
}

const Main = ctx =>{
	ctx.response.body = 'Hello World!!!'
}

app.use(Logger);
app.use(Main);
app.listen(3000);