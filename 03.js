/*
* @Author: zhanghuiming
* @Date:   2017-12-14 17:05:10
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-16 10:06:33
*/
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  if (ctx.request.accepts('xml')) {
    ctx.response.type = 'xml';
    ctx.response.body = '<data>Hello World</data>';
  } else if (ctx.request.accepts('json')) {
    ctx.response.type = 'json';
    ctx.response.body = { data: 'Hello World' };
  } else if (ctx.request.accepts('html')) {
    ctx.response.type = 'html';
    ctx.response.body = '<p>Hello World</p>';
  } else {
    ctx.response.type = 'text';
    ctx.response.body = 'Hello World';
  }
};

app.use(main);
app.listen(3000);