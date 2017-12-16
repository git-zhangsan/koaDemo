/*
* @Author: zhanghuiming
* @Date:   2017-12-15 14:39:06
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 14:40:36
*/
const path = require('path');
const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');

const main = serve(path.join(__dirname));

app.use(main);
app.listen(3000);