import Vue from "vue";
import Vuex from "vuex";
import vuepresist from "vuex-persist";
import { loginApi } from "../api/index.js";
import Router from "../router";
// 指定本地存储的库的类型
const vuexLocal = new vuepresist({
  storage: window.sessionStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 控制左侧导航展开收缩的
    isCollapse: false,
    // 用户信息
    user: {}
  },
  mutations: {
    // 控制左侧导航展开收缩的
    setCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
    // 设置用户信息
    setUser(state, user) {
      state.user = user;
    },
    // 退出登陆
    setUserOut(state, flag) {
      state.user.loginState = flag;
      // 手动跳转路由
      Router.replace("/login");
    }
  },
  actions: {
    // 异步的请求登陆接口
    setUserAction({ commit }, data) {
      // api接口在这里
      loginApi(data).then(res => {
        // res：数据对象，false
        if (res) {
          // 赋值||跳转逻辑
          commit("setUser", res.data);
          // 跳转到首页
          Router.replace("/");
        }
      });
    },
    // 退出登陆
    outPutAction({ commit }, data) {
      // data=={uid,token}
      setTimeout(() => {
        // axios接口假设这里就是后端请求接口
        commit("setUserOut", false);
      }, 500);
    }
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
