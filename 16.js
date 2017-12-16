/*
* @Author: zhanghuiming
* @Date:   2017-12-15 15:05:00
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 15:10:06
*/
const Koa = require('koa');
const app = new Koa();

const handle = async (ctx,next) => {
	try{
		await next();
	}catch(e){
		ctx.response.status = e.statusCode || e.status || 500;
		ctx.response.body = {
			message:e.message
		}
	}
};

const main = ctx =>{
	ctx.throw(500);
}

app.use(handle);
app.use(main);

app.listen(3000);