/*
* @Author: zhanghuiming
* @Date:   2017-12-15 15:00:54
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 15:02:17
*/
const Koa = require('koa');
const app = new Koa();

const main = ctx =>{
	ctx.response.status = 404;
	ctx.response.body = 'Page Not Found';
}

app.use(main);
app.listen(3000);