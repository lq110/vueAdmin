<template>
  <div>
    <!-- 筛选条件 -->
    <FilterBox @getFilter="getFilter" />
    <!-- 表格 -->
    <TableBox :tableData="tableData" v-bind:tableHead="tableHead" />
    <!-- 分页器 -->
    <Pages @currentPage="getPage" :total="total" />
  </div>
</template>

<script>
import FilterBox from "@/components/filterTable/filter";
import TableBox from "@/components/filterTable/table";
import Pages from "@/components/pages";
import { getShopApi } from "../api";
export default {
  name: "Shop",
  components: { FilterBox, TableBox, Pages },
  data() {
    return {
      total: 100, // 总条数
      tableData: [],
      tableHead: [
        { prop: "date", label: "时间" },
        { prop: "prodName", label: "产品" },
        { prop: "kefu", label: "客服" },
        { prop: "userName", label: "用户" },
        { prop: "originName", label: "供货商" },
        { prop: "other", label: "其他" }
      ]
    };
  },
  methods: {
    // 获取筛选的参数
    getFilter(query) {
      this.getShopData(query);
    },
    // 获取子组件传递过来的参数--分页器
    getPage(page) {
      this.getShopData({ page: page });
    },
    // 获取购物车
    getShopData(param) {
      getShopApi(param).then(res => {
        // 赋值
        this.total = res.total;
        this.tableData = res.list;
        // console.log(res);
      });
    }
  },
  mounted() {
    // 当页面加载完，就立即获取一次
    this.getShopData();
  }
};
</script>

<style></style>
