import Vue from "vue";
import VueRouter from "vue-router";
import vuex from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: { title: "首页" },
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/tj",
    meta: { title: "统计" },
    name: "tj",
    component: () => import(/* webpackChunkName: "tj" */ "../views/Tongji.vue")
  },
  {
    path: "/views",
    meta: { title: "视图" },
    name: "views",
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Views.vue")
  },
  {
    path: "/shop",
    meta: { title: "购物车" },
    name: "shop",
    component: () => import(/* webpackChunkName: "shop" */ "../views/Shop.vue")
  },
  {
    path: "/dz",
    meta: { title: "订单" },
    name: "dz",
    component: () => import(/* webpackChunkName: "dz" */ "../views/Dz.vue")
  },
  {
    path: "/account",
    meta: { title: "用户管理" },
    name: "account",
    component: () =>
      import(/* webpackChunkName: "account" */ "../views/Account.vue")
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// 拦截器---路由守卫:只要路由发生变化，他就会执行
router.beforeEach((to, from, next) => {
  // 当导航不是登陆页，并且用户已经登陆了，就next()
  var user = vuex.state.user.loginState;
  if (to.path !== "/login" && !user) {
    next("/login");
  } else if (to.path === "/login" && user) {
    next("/");
  } else {
    next();
  }
});
// 防止重载报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
export default router;
