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



