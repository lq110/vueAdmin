<template>
  <div class="filter-box">
    <!-- 筛选条件：日期，产品，客服，用户，供货商，其他； -->
    <el-form :inline="true">
      <!-- 时间选择器 -->
      <el-form-item label="时间" v-if="this.$route.name==='shop'? true : false">
        <el-date-picker
          value-format="yyyy-MM-dd"
          v-model="date"
          type="date"
          placeholder="选择日期"
        />
      </el-form-item>
      <!-- 产品输入框 -->
      <el-form-item label="产品">
        <el-input placeholder="产品名称" v-model="prodName" clearable />
      </el-form-item>
      <!-- 客服 -->
      <el-form-item label="客服">
        <el-select v-model="kefuName" clearable placeholder="选择客服">
          <el-option
            v-for="item in kefuList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <!-- 用户 -->
      <el-form-item label="用户">
        <el-input placeholder="用户名称" v-model="userName" clearable />
      </el-form-item>
      <!-- 供货商 -->
      <el-form-item label="供货商">
        <el-input placeholder="供货商" v-model="originName" clearable />
      </el-form-item>
      <!-- 其他 -->
      <el-form-item label="其他">
        <el-input placeholder="其他" v-model="other" clearable />
      </el-form-item>
      <!-- 搜索按钮 -->
      <el-form-item>
        <el-button @click="search" type="danger">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "filterbox",
  data() {
    return {
      // 其他
      other: "",
      // 供货商
      originName: "",
      // 用户名
      userName: "",
      // 时间
      date: "",
      // 产品
      prodName: "",
      // 客服名单
      kefuList: [
        {
          value: "江晓燕",
          label: "江晓燕"
        },
        {
          value: "王晓东",
          label: "王晓东"
        },
        {
          value: "阿三",
          label: "阿三"
        }
      ],
      // 被选中的客服名
      kefuName: ""
    };
  },
  methods: {
    search() {
      // 1. 先判断我们data里的填入内容是否合法
      const { other, originName, prodName, userName, date, kefuName } = this;
      // const result = [other, originName, userName, date, kefuName].some(
      //   item => item !== ""
      // );
      const result = [
        { val: prodName, key: "prodName" },
        { val: other, key: "other" },
        { val: originName, key: "originName" },
        {
          val: userName,
          key: "userName"
        },
        { val: date, key: "date" },
        { val: kefuName, key: "kefuName" }
      ].filter(item => item.val);

      if (result && result.length) {
        let obj = {};
        result.forEach(item => {
          obj[item.key] = item.val;
        });
        // 2. 如果有可查条件
        this.$emit("getFilter", { type: "filter", ...obj });
      } else {
        this.$emit("getFilter", false);
      }
    }
  }
};
</script>

<style>
.filter-box {
  width: 100%;
  /* display: flex;
  justify-content: space-evenly; */
}
</style>
