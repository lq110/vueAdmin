<template>
  <!-- echarts容器 -->
  <div style="display:flex">
    <div style="flex:5">
      <h3 style="font-size:30px;  text-align: center">商品出售统计表</h3>
      <div id="echarts-zhu" style="width: 100%;height:400px;"></div>
    </div>
    <div style="flex:5">
      <h3 style="font-size:30px;  text-align: center">商品出售详情</h3>

      <el-table
        :data="tableData"
        height="500"
        border
        style="width: 60%;margin: 0 auto;"
        show-summary
      >
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column prop="name" label="产品"> </el-table-column>
        <el-table-column prop="gongHuoShang" label="供货商"> </el-table-column>
        <el-table-column prop="kuCun" label="库存" sortable> </el-table-column>
        <el-table-column prop="yiShou" label="已售/个" sortable>
        </el-table-column>
        <el-table-column prop="danJia" label="单价/元" sortable>
        </el-table-column>
        <el-table-column prop="liRun" label="利润/元" sortable>
        </el-table-column>
        <el-table-column
          prop="allPrice"
          label="收入/元"
          sortable
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
// 悬浮框里的三个图标
app.title = "坐标轴刻度与标签对齐";
// 悬浮框数据---公共

export default {
  name: "views",
  data() {
    return {
      all: "",
      tableData: [
        {
          date: "2019-12-17",
          name: "无籽西瓜",
          gongHuoShang: "大兴西瓜",
          kuCun: "2",
          yiShou: "200000",
          danJia: "15",
          liRun: "13",
          allPrice: ""
        },
        {
          date: "2019-12-17",
          name: "哈密瓜",
          gongHuoShang: "新疆哈密",
          kuCun: "200",
          yiShou: "100000",
          danJia: "35",
          liRun: "30",
          allPrice: ""
        },
        {
          date: "2019-12-17",
          name: "富士苹果",
          gongHuoShang: "日本大阪",
          kuCun: "1000",
          yiShou: "10000",
          danJia: "60",
          liRun: "50",
          allPrice: ""
        },
        {
          date: "2019-12-17",
          name: "榴莲",
          gongHuoShang: "泰国阿三",
          kuCun: "2000",
          yiShou: "50000",
          danJia: "150",
          liRun: "120",
          allPrice: ""
        },
        {
          date: "2019-12-17",
          name: "土坝饼干",
          gongHuoShang: "老王蛋糕店",
          kuCun: "20000",
          yiShou: "2",
          danJia: "10",
          liRun: "8",
          allPrice: ""
        },
        {
          date: "2019-12-17",
          name: "甘蔗",
          gongHuoShang: "江西甜霸王",
          kuCun: "0",
          yiShou: "200000",
          danJia: "15",
          liRun: "13",
          allPrice: ""
        },
        {
          date: "2019-12-17",
          name: "香蕉",
          gongHuoShang: "海南天之南",
          kuCun: "15",
          yiShou: "160000",
          danJia: "5",
          liRun: "3",
          allPrice: ""
        },
        {
          date: "2019-12-17",
          name: "猕猴桃",
          gongHuoShang: "菲律宾大王",
          kuCun: "10000",
          yiShou: "20000",
          danJia: "18",
          liRun: "15",
          allPrice: ""
        }
      ],
      options: {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "无籽西瓜",
              "哈密瓜",
              "富士苹果",
              "榴莲",
              "土坝饼干",
              "甘蔗",
              "香蕉",
              "猕猴桃"
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [20000, 52000, 20000, 33400, 39000, 33000, 22000, 10200]
          }
        ]
      }
    };
  },
  mounted() {
    // 初始画布
    var myChart = echarts.init(document.getElementById("echarts-zhu"));
    // 设置数据---绘画
    myChart.setOption(this.options);
    // 监听事件---鼠标移入
  }
};
</script>

<style>
#echarts-pie {
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  /* background: cyan; */
}
</style>
