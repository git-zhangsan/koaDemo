const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', function (ctx, next) {
  ctx.body = 'Hello World~~~~';
})
.get('/say', function (ctx, next) {
  ctx.body = 'Hello San~~~~';
});

app.use(router.routes());
  //.use(router.allowedMethods());
// x-response-time
// app.use(function *(next){
//   // (1) 进入路由
//   console.log('come in router action one');
//   var start = new Date;
//   yield next;
//   // (5) 再次进入 x-response-time 中间件，记录2次通过此中间件「穿越」的时间
//   console.log('come in x-response-time again action five');
//   var ms = new Date - start;
//   this.set('X-Response-Time', ms + 'ms');
//   // (6) 返回 this.body
//   console.log('come in set X-Response-Time action six');
// });

// // logger
// app.use(function *(next){
//   // (2) 进入 logger 中间件
//   console.log('come in logger action two');
//   var start = new Date;
//   yield next;
//   // (4) 再次进入 logger 中间件，记录2次通过此中间件「穿越」的时间
//   console.log('come in logger action four');
//   var ms = new Date - start;
//   console.log('%s %s - %s', this.method, this.url, ms);
// });

// // response
// app.use(function *(){
//   // (3) 进入 response 中间件，没有捕获到下一个符合条件的中间件，传递到 upstream
//   console.log('come in response middleware action three');
//   this.body = 'Hello World!!!';
// });

app.listen(3000);