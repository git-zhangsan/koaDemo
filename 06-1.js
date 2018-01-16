/*
* @Author: zhanghuiming
* @Date:   2017-12-16 11:00:00
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-16 17:31:41
*/
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', function (ctx, next) {
  ctx.body = 'Hello World';
});

router.get('/about', function (ctx, next) {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
});

app.use(router.routes());
app.listen(3000);