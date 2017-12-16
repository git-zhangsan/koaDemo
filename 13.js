/*
* @Author: zhanghuiming
* @Date:   2017-12-15 14:45:08
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 14:49:43
*/
const Koa = require('koa')
const route = require('koa-route');
const app = new Koa();

const redirect = ctx =>{
	ctx.response.redirect('/');
}

const main = ctx => {
	
	ctx.response.body = 'Hell Redirect!'
}
app.use(route.get('/',main));

app.use(route.get('/redirect',redirect));

app.listen(3000);