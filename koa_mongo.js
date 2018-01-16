'use strict';

const Koa = require('koa');
const mongo = require('koa-mongo');

const app = new Koa();
app.use(mongo());

app.use(async (ctx,next)=>{
  const result = await ctx.mongo.db('test').collection('users').insert({name:'haha'});
  const userId = result.ops[0]._id.toString();
  ctx.body = await ctx.mongo.db('test').collection('users').find().toArray();
  ctx.mongo.db('test').collection('users').remove({
    _id:mongo.ObjectId(userId)
  });
});
app.listen(3000,()=>{
  console.log('listening on port 3000');
})
