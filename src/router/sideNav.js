// 导航配置文件
// role : 1管理员，2普通用户,!1不能看购物车
export default {
  // 左侧导航数据
  sideNav: [
    {
      name: "首页",
      icon: "el-icon-menu",
      path: "/",
      role: "all",
      children: [
        { name: "统计", path: "/tj", role: "all" },
        { name: "视图", path: "/views", role: "all" }
      ]
    },
    {
      name: "购物车",
      icon: "el-icon-shopping-cart-full",
      path: "/shop"
    },
    {
      name: "订单",
      icon: "el-icon-notebook-2",
      path: "/dz"
    },
    {
      name: "账户管理",
      icon: "el-icon-user",
      path: "/account"
    }
  ]
};
