/*
* @Author: zhanghuiming
* @Date:   2017-12-15 15:11:39
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 15:15:41
*/
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
	ctx.throw(500)
}

app.on('error',(err,ctx)=>{
	console.error('error message ', err);
})

app.use(main);
app.listen(3000);