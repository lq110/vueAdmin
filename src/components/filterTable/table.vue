<template>
  <div class="table-box">
    <el-table :data="tableData" height="250" border style="width: 100%">
      <el-table-column
        :prop="item.prop || ''"
        v-for="item in tableHead"
        :key="item.label"
        :label="item.label"
      ></el-table-column>
      <el-table-column
        v-if="tableHead[tableHead.length - 1].prop === false"
        :label="tableHead[tableHead.length - 1].label"
      >
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "tableBox",
  props: {
    // 表格里的数据
    tableData: {
      type: Array,
      default: () => []
    },
    // 表格的表头数据
    tableHead: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleEdit(index, row) {
      this.$emit("tooles", { row, index, type: "edit" });
    },
    handleDelete(index, row) {
      this.$emit("tooles", { row, index, type: "delete" });
    }
  }
};
</script>

<style></style>
