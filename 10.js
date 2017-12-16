/*
* @Author: zhanghuiming
* @Date:   2017-12-15 14:26:29
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 14:29:30
*/
const fs = require('fs.promised');
const Koa = require('koa');
const app = new Koa();

const main = async function(ctx,next){
	ctx.response.type = 'html';
	ctx.response.body = await fs.readFile('./template.html','utf-8');
};

app.use(main);
app.listen(3000);