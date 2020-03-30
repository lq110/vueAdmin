1. 在 react 项目下建一个 nodeServer 的目录
2. 在 nodeServer 里面打开终端：npm init -y
3. 在 nodeServer 中安装依赖：
   cnpm i -S body-parser express
4. 安装全局的 nodejs 热更新模块
   cnpm i -g hotnode
   41. 苹果 mac 安装全局依赖的时候可能会有权限：
       sudo cnpm i -g hotnode
5. 检验成功与否 hotnode -v
6. express:是基于 nodejs 语法封装的后端框架

### hotnode 只对 nodeV10 版本以下兼容，高级版本 node 下报错；

### 所以换成 nodemon 全局安装：cnpm i -g nodemon

### 目录：

- getApi 和 postApi 处理前端 get 和 post 请求
- mySql 是存放数据和用户数据的
- utensil 是工具代码--主要包含读写 mySql 文件
- index.js 是入口文件--启动文件
