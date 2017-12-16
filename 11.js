/*
* @Author: zhanghuiming
* @Date:   2017-12-15 14:33:36
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 14:36:42
*/
const compose = require('koa-compose');
const Koa = require('koa');
const app = new Koa();
const logger = (ctx,next)=>{
	console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
	next();
}
const main = ctx =>{
	ctx.response.body = 'Hello middleWare';
}
const middleWare = compose([logger,main])
app.use(middleWare);
app.listen(3000);