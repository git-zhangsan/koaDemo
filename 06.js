/*
* @Author: zhanghuiming
* @Date:   2017-12-15 10:26:16
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-15 11:03:36
*/
const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(route.get('/', main));
app.use(route.get('/about', about));

app.use(main);
app.listen(3000);