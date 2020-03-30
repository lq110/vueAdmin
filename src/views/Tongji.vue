<template>
  <div class="tongji-box">
    <el-table
      :data="tableData"
      height="250"
      border
      :span-method="objectSpanMethod"
      :summary-method="getSummaries"
      show-summary
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="产品" width="180"></el-table-column>
      <el-table-column prop="gongHuoShang" label="供货商"></el-table-column>
      <el-table-column prop="KuCun" sortable label="库存(个)"></el-table-column>
      <el-table-column
        prop="YiShou"
        sortable
        label="已售(个)"
      ></el-table-column>
      <el-table-column
        prop="DanJia"
        sortable
        label="单价(元)"
      ></el-table-column>
      <el-table-column prop="LiRun" sortable label="利润(元)"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "tongji",
  data() {
    return {
      tableData: [
        {
          date: "2019-12-17",
          name: "无籽西瓜",
          gongHuoShang: "大兴西瓜",
          KuCun: "2",
          YiShou: "200000",
          DanJia: "15",
          LiRun: "13.5"
        },
        {
          date: "2019-12-17",
          name: "哈密瓜",
          gongHuoShang: "新疆哈密",
          KuCun: "200",
          YiShou: "100000",
          DanJia: "35",
          LiRun: "30"
        },
        {
          date: "2019-12-17",
          name: "富士苹果",
          gongHuoShang: "日本大阪",
          KuCun: "1000",
          YiShou: "10000",
          DanJia: "60",
          LiRun: "50"
        },
        {
          date: "2019-12-17",
          name: "榴莲",
          gongHuoShang: "泰国阿三",
          KuCun: "2000",
          YiShou: "50000",
          DanJia: "150",
          LiRun: "120"
        },
        {
          date: "2019-12-17",
          name: "图吧饼干",
          gongHuoShang: "老王蛋糕店",
          KuCun: "20000",
          YiShou: "2",
          DanJia: "10",
          LiRun: "8"
        },
        {
          date: "2019-12-17",
          name: "甘蔗",
          gongHuoShang: "江西甜棒",
          KuCun: "50",
          YiShou: "100000",
          DanJia: "20",
          LiRun: "18"
        },
        {
          date: "2019-12-17",
          name: "香蕉",
          gongHuoShang: "海南",
          KuCun: "15",
          YiShou: "160000",
          DanJia: "3.5",
          LiRun: "13.5"
        },
        {
          date: "2019-12-17",
          name: "香蕉",
          gongHuoShang: "海南",
          KuCun: "15",
          YiShou: "160000",
          DanJia: "3.5",
          LiRun: "13.5"
        }
      ]
    };
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 8 === 0) {
          return {
            rowspan: 866666,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "合计";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index];
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    }
  }
};
</script>

<style></style>
