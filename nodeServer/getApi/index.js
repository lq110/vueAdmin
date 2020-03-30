const Ut = require("../utensil");
const readFile = Ut.readFile; // 读文件
const writeFile = Ut.writeFile; // 写文件

module.exports = app => {
  // 响应前端get请求方法接口
  app.get("*", (req, res, next) => {
    // req 表示前端请求的数据对象；res：响应对象
    // 过滤掉网站的ico图标
    if (req.path === "/favicon.ico") return false;
    // 业务逻辑
    const query = req.query; // get里的参数--前端传进来的
    switch (req.path) {
      case "/my":
        console.log(query);
        // 先读取
        readFile("data/my.json", data => {
          data.data = query;
          // 后写入
          writeFile("data/my.json", data, state => {
            // 写入成功
            if (state) {
              res.json({ code: 1, msg: "写入成功！" });
            } else {
              res.json({ code: 0, msg: "写入失败！" });
            }
          });
        });

        break;
      case "/home":
        readFile("data/home.json", data => {
          res.json(data);
        });
        break;
      case "/list":
        readFile("data/list.json", data => {
          res.json(data[query.id]);
        });
        break;
      case "/detail":
        // get: query  post: body

        readFile("data/detail.json", data => {
          let itemd = data.find(item => item.id === query.id);
          if (itemd) {
            // 响应：后端通知前端---接口返回值
            res.json({
              code: 1,
              msg: "请求成功！",
              data: itemd
            });
          } else {
            res.json({
              code: 0,
              msg: "请求失败！",
              data: {}
            });
          }
        });

        break;
      default:
        res.json(true);
    }
  });
};
