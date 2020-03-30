// 开启一个node服务
const Expess = require("express"); // 基于node后端的框架
const cors = require("cors"); // 做跨域的
const app = Expess(); // 初始程序
const bodyParser = require("body-parser"); // 使用中间件可以获取到post-body里的数据
app.use(bodyParser.urlencoded({ extended: true })); // 表单请求
app.use(bodyParser.json()); // json请求--post

// 开启端口--服务器接口
app.listen(3000, () => console.log("服务请求：http://localhost:3000/")); // 开启服务
// 开放跨域请求设置
app.use(cors());

// get请求数据
require("./getApi")(app);

// post登陆注册退出
require("./postApi")(app);
