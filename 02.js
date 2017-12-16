/*
* @Author: zhanghuiming
* @Date:   2017-12-14 17:03:24
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-16 09:39:28
*/
const Koa = require('koa');
const app = new Koa();

// const main = ctx =>{
// 	ctx.response.body = 'Hello World';
// }

// app.use(main);

app.use(ctx=>{
	ctx.body = 'Hello World';
})

app.listen(3000)