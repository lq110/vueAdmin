const fs = require("fs");
const path = require("path");
// 读文件
exports.readFile = (fileName, callback) => {
  fs.readFile(
    path.resolve(__dirname, "../mySql/" + fileName),
    "utf-8",
    (err, data) => {
      if (err) {
        callback && callback(false);
      } else {
        callback && callback(JSON.parse(data));
      }
    }
  );
};

// 写文件
exports.writeFile = (fileName, data, callback) => {
  // console.log(fileName, data, callback);
  fs.writeFile(
    path.resolve(__dirname, "../mySql/" + fileName),
    JSON.stringify(data),
    err => {
      if (err) {
        callback && callback(false);
      } else {
        callback && callback(true);
      }
    }
  );
};
