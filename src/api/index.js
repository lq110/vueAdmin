import axios from "axios";
import {
  Message
} from "element-ui";
import md5 from "md5";

const Axios = axios.create({
  baseURL: "http://localhost:3000/"
});
// console.log(process.env);

// 处理返回值方法
const resetData = res => {
  if (res.status === 200) {
    if (res.data.code === 1) {
      // 成功
      return res.data;
    } else {
      // 接口返回值里的不成功
      Message.error({
        offset: 100, // 距离顶部距离
        message: res.data.msg || "操作失败！"
      });
      return false;
    }
  } else {
    // ajax请求出问题，网络原因
    Message.error("网络错误，稍后重试！");
    return false;
  }
};
// 登陆
export const loginApi = userData => {
  // 前端加密---md5;pas
  userData.password = md5(userData.password);
  return Axios.post("login", userData).then(res => {
    return resetData(res);
  });
};

// 获取购物车数据
export const getShopApi = (type = "all") => {
  // 假数据
  const originData = [{
      id: 1,
      date: "2019-12-17",
      prodName: "榴莲",
      kefu: "阿三",
      userName: "奔跑的蜗牛",
      originName: "泰国阿三",
      other: "无"
    },
    {
      id: 2,
      date: "2019-12-17",
      prodName: "苹果",
      kefu: "江晓燕",
      userName: "奔跑的蜗牛",
      originName: "泰国阿三",
      other: "找人代付"
    },
    {
      id: 3,
      date: "2019-12-16",
      prodName: "甘蔗",
      kefu: "王晓东",
      userName: "飞翔的骆驼",
      originName: "江南果王",
      other: "无"
    },
    {
      id: 4,
      date: "2019-12-15",
      prodName: "香蕉",
      kefu: "王晓东",
      userName: "老王",
      originName: "江南果王",
      other: "无"
    },
    {
      id: 5,
      date: "2019-12-14",
      prodName: "西瓜",
      kefu: "王晓东",
      userName: "飞翔的骆驼",
      originName: "江南果王",
      other: "无"
    },
    {
      id: 6,
      date: "2019-12-13",
      prodName: "土豆",
      kefu: "江晓燕",
      userName: "皮条王子",
      originName: "上海果霸",
      other: "给领导买的"
    },
    {
      id: 7,
      date: "2019-12-18",
      prodName: "火龙果",
      kefu: "阿三",
      userName: "拾荒老阮",
      originName: "北京菜市场",
      other: "记得开发票"
    }
  ];
  let data = originData.concat(originData);
  return Axios.get("/", {
    params: {
      type,
      user: {
        uid: "xxx",
        token: "xxxx"
      }
    }
  }).then(res => {
    // 这里是模拟的假数据
    if (typeof type.page === "string") {
      // 分页
      return {
        // 分页器的总条数
        total: data.length,
        list: data
      };
    } else if (type.type === "filter") {
      // 筛选条件
      const querys = Object.entries(type);
      // 先删掉数组中ytpe项
      const index = querys.findIndex(item => item[0] === "type");
      querys.splice(index, 1);
      const Data = JSON.parse(JSON.stringify(data)).filter(item => {
        for (let key = 0; key < querys.length; key++) {
          if (item[querys[key][0]] === querys[key][1]) {
            return item;
          }
        }
      });
      return {
        // 分页器的总条数
        total: Data.length,
        list: Data
      };
    } else {
      return {
        // 分页器的总条数
        total: data.length,
        list: data
      };
    }
  });
};

export const editUser = (data) => {
  return Axios.get('/', data).then(res => {
    return true
  })
}
export const deleteUser = (data) => {
  return Axios.get('/', data).then(res => {
    return true
  })
}