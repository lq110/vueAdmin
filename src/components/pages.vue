<template>
  <el-pagination
    background
    @current-change="handleCurrentChange"
    layout="prev, pager, next"
    :total="total"
  />
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

<style></style>
