/*
* @Author: zhanghuiming
* @Date:   2017-12-15 15:17:06
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 16:15:38
*/
const Koa = require('koa');
const app = new Koa();

const handle = async (ctx,next)=>{
	try{
		await next();
	}catch(e){
		ctx.response.status = e.statusCode || e.status || 500;
		ctx.response.type = 'html';
		ctx.response.body = '<p>Something wrong, please contact administrator.</p>';
		ctx.app.emit('error',e, ctx);
	}
};

const main = ctx => {
	ctx.throw(500);
}

app.on('error', function(err) {
  console.log('logging error ', err.message);
  console.log(err);
});

app.use(handle);
app.use(main);

app.listen(3000);