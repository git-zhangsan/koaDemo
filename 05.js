/*
* @Author: zhanghuiming
* @Date:   2017-12-15 10:15:14
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 10:18:55
*/

const Koa = require('koa');
const app = new Koa();

const main = ctx =>{
	if(ctx.request.path!='/'){
		ctx.response.type = 'html';
		ctx.response.body = '<a href="/">Index Page</a>';
	}else{
		ctx.response.body = 'Hello World';
	}
}

app.use(main);
app.listen(3000);