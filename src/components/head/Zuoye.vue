<template>
  <div>
    <div>
      <div
        v-if="user.role == 1"
        style="background:blue;width:300px;height:300px"
      ></div>
      <div v-else style="background:green;width:300px;height:300px"></div>
    </div>
  </div>
</template>

<script>
//引入辅助函数
import { mapState } from "vuex";
export default {
  computed: {
    //获取vuex中state中的数据
    ...mapState(["isCollapse", "user"])
  }
};
</script>

<style>
</style>