/*
* @Author: zhanghuiming
* @Date:   2017-12-15 10:08:54
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 10:13:57
*/
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = ctx =>{
	ctx.response.type = 'html';
	ctx.response.body = fs.createReadStream('./template.html');
};

app.use(main);
app.listen(3000);