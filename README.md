# koaDemo

旨在接触阶段了解Koa，并做示例。

注：此示例参照阮一峰老师示例，完全属于学习型练习阶段，照着敲一遍只是为了加深记忆，仅此。

#01

目标：使用 Koa 构建一个HTTP服务

执行：$ node 01.js

结果：浏览器访问 http://localhost:3000/，因未指定任何显示内容，页面展示Not Found，此时koa服务构建完成。

#02

目标：Context.response.body 返回内容示例

执行：$ node 02.js

结果：浏览器访问 http://localhost:3000/，页面展示 Hello World （Context.response.body返回的内容）此处 Context.response代表HTTP Response

#03

目标：Context.response.type 返回类型示例

执行：$ node 03.js

结果：浏览器访问 http://localhost:3000/，页面展示Xml文档，个人理解：request.accepts会依次判断可能出现的类型，如果都没有匹配则默认返回text/plain

#04

目标：Koa读取模板文件，然后将这个模板返回给用户

执行：$ node 04.js

结果：浏览器访问 http://localhost:3000/，页面展示template.html模板内容


#05

目标：Koa原生路由示例

执行：$ node 05.js

结果：浏览器访问 http://localhost:3000/about，页面展示Index Page


#06

目标：koa-route示例

执行：$ node 06.js

结果：浏览器访问 http://localhost:3000/，页面展示Hello World，浏览器访问 http://localhost:3000/about，页面展示Index Page

#06-1

目标：koa-router示例

执行：$ node 06-1.js

结果：浏览器访问 http://localhost:3000/，页面展示Hello World，浏览器访问 http://localhost:3000/about，页面展示Index Page


#07

目标：Koa中间件——Logger示例

执行：$ node 07.js

结果：浏览器访问 http://localhost:3000/，控制台打印时间戳、请求方式、请求路径


#08

目标：Koa中间件示例

描述：每个中间件默认接受两个参数，第一个参数是 Context 对象，第二个参数是next函数。只要调用next函数，就可以把执行权转交给下一个中间件。

执行：$ node 08.js

结果：浏览器访问 http://localhost:3000/，控制台打印时间戳、请求方式、请求路径


#09

目标：中间件栈示例

描述：多个中间件会形成一个栈结构，以"先进后出"的顺序执行

执行：$ node 09.js

结果：浏览器访问 http://localhost:3000/，>> one >> two >> three >> three >> two >> one


#10

目标：Koa异步中间件示例

描述：有异步操作（比如读取数据库），中间件就必须写成 async 函数

执行：$ node 10.js

结果：浏览器访问 http://localhost:3000/，页面展示template.html模板内容


#11

目标：Koa中间件的合成

描述：koa-compose模块可以将多个中间件合成为一个

执行：$ node 11.js

结果：浏览器访问 http://localhost:3000/，控制台打印时间戳、请求方式、请求路径


#12

目标：请求静态资源示例

执行：$ node 12.js

结果：浏览器访问 http://localhost:3000/12.js，可查看脚本内容


#13

目标：重定向示例

描述：redirect()方法可以发出一个302跳转，将用户导向另一个路由

执行：$ node 13.js

结果：浏览器访问 http://localhost:3000/redirect，浏览器会将用户导向根路由


#14

目标：500错误示例

描述：如果代码运行过程中发生错误，我们需要把错误信息返回给用户。HTTP 协定约定这时要返回500状态码

执行：$ node 14.js

结果：浏览器访问 http://localhost:3000/，浏览器展示500错误页"Internal Server Error"。


#15

目标：资源404示例

描述：如果代码运行过程中未找到目标资源，返回404错误

执行：$ node 15.js

结果：浏览器访问 http://localhost:3000/，浏览器展示Page Not Found。


#16 

目标：处理错误的中间件示例

描述：为了方便处理错误，最好使用try...catch将其捕获

执行：$ node 15.js

结果：浏览器访问 http://localhost:3000/，浏览器展示500错误页以及错误信息。


#17 

目标：error 事件的监听示例

描述：运行过程中一旦出错，Koa 会触发一个error事件。监听这个事件，也可以处理错误

执行：$ node 17.js

结果：浏览器访问 http://localhost:3000/，控制台输出监听到的错误信息


#18 

目标：释放 error 事件示例

描述：如果错误被try...catch捕获，就不会触发error事件。这时，必须调用ctx.app.emit()，手动释放error事件，才能让监听函数生效

执行：$ node 18.js

结果：浏览器访问 http://localhost:3000/，控制台输出监听到的错误信息


#19 

目标：Cookies示例

描述：用来读写 Cookie

执行：$ node 19.js

结果：浏览器访问 http://localhost:3000/，浏览器展示数字变量，且刷新之后会叠加


#20 

目标：表单示例

描述：koa-body模块可以用来从POST请求的数据体里面提取键值对

执行：$ node 20.js

结果：浏览器访问 http://localhost:3000/，打开另外一个终端模拟post请求，控制台输出对应的信息









