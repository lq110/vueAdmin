<template>
  <el-pagination background layout="prev, pager, next" :total="total">
  </el-pagination>
</template>

<script>
export default {
  name: "pages",
  props: {
    total: {
      type: String | Number,
      default: 0
    }
  },
  methods: {
    handleCurrentChange(page) {
      this.$emit("currentPage", page);
    }
  }
};
</script>

<style>
</style>