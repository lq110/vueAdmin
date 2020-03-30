<template>
  <div class="echats-box">
    <div id="echats-pie" style="width: 100%;height: 400px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
// 小图片
var weatherIcons = {
  Sunny:
    "https://www.echartsjs.com/examples/data/asset/img/weather/sunny_128.png",
  Cloudy:
    "https://www.echartsjs.com/examples/data/asset/img/weather/cloudy_128.png",
  Showers:
    "https://www.echartsjs.com/examples/data/asset/img/weather/showers_128.png"
};
// label悬浮框数据
const label = {
  normal: {
    formatter: [
      "{title|{b}}{abg|}",
      "  {weatherHead|天气}{valueHead|天数}{rateHead|占比}",
      "{hr|}",
      "  {Sunny|}{value|202}{rate|55.3%}",
      "  {Cloudy|}{value|142}{rate|38.9%}",
      "  {Showers|}{value|21}{rate|5.8%}"
    ].join("\n"),
    backgroundColor: "#eee",
    borderColor: "#777",
    borderWidth: 1,
    borderRadius: 4,
    rich: {
      title: {
        color: "#eee",
        align: "center"
      },
      abg: {
        backgroundColor: "#333",
        width: "100%",
        align: "right",
        height: 25,
        borderRadius: [4, 4, 0, 0]
      },
      Sunny: {
        height: 30,
        align: "left",
        backgroundColor: {
          image: weatherIcons.Sunny
        }
      },
      Cloudy: {
        height: 30,
        align: "left",
        backgroundColor: {
          image: weatherIcons.Cloudy
        }
      },
      Showers: {
        height: 30,
        align: "left",
        backgroundColor: {
          image: weatherIcons.Showers
        }
      },
      weatherHead: {
        color: "#333",
        height: 24,
        align: "left"
      },
      hr: {
        borderColor: "#777",
        width: "100%",
        borderWidth: 0.5,
        height: 0
      },
      value: {
        width: 20,
        padding: [0, 20, 0, 30],
        align: "left"
      },
      valueHead: {
        color: "#333",
        width: 20,
        padding: [0, 20, 0, 30],
        align: "center"
      },
      rate: {
        width: 40,
        align: "right",
        padding: [0, 10, 0, 0]
      },
      rateHead: {
        color: "#333",
        width: 40,
        align: "center",
        padding: [0, 10, 0, 0]
      }
    }
  }
};
export default {
  name: "Views",
  data() {
    return {
      charts: null, // 存储实例标签
      opinion: ["西瓜", "香蕉", "哈密瓜", "甘蔗", "榴莲"],
      opinionData: [
        {
          value: 1548,
          name: "西瓜"
        },
        { value: 535, name: "香蕉" },
        { value: 510, name: "哈密瓜" },
        { value: 634, name: "甘蔗" },
        { value: 735, name: "榴莲" }
      ]
    };
  },
  methods: {
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
          text: "今日销售饼图",
          subtext: "2019-12-17",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} :已售{c} 占比({d}%)"
        },
        legend: {
          // orient: "vertical",
          // x: "left",
          bottom: 10,
          left: "center",
          data: this.opinion
        },
        series: [
          {
            name: "产品",
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: this.opinionData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
      this.charts.on("mouseover", e => {
        const name = e.name;
        this.opinionData.forEach(item => {
          if (item.name === name) {
            item.label = label;
          } else {
            delete item.label;
          }
        });
        this.refreshData(this.opinionData);
      });
    },
    refreshData(data) {
      const option = this.charts.getOption();
      option.series[0].data = data;
      this.charts.setOption(option);
    }
  },
  mounted() {
    // 在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中
    // 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。
    this.$nextTick(function() {
      this.drawPie("echats-pie");
    });
  }
};
</script>

<style>
.echats-box {
  width: 100%;
  height: 80vh;
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>
