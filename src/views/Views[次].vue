<template>
  <div id="echarts-pie"></div>
</template>

<script>
import echarts from "echarts";
// 悬浮框里的小图片
var weatherIcons = {
  Sunny:
    "https://www.echartsjs.com/examples/data/asset/img/weather/sunny_128.png",
  Cloudy:
    "https://www.echartsjs.com/examples/data/asset/img/weather/cloudy_128.png",
  Showers:
    "https://www.echartsjs.com/examples/data/asset/img/weather/showers_128.png"
};
var label = {
  normal: {
    formatter: [
      "{title|{b}}{abg|}",
      "  {weatherHead|库存}{valueHead|已售}{rateHead|营业率}",
      "{hr|}",
      `{Sunny|200}{value|202}{rate|55.3%}`,
      "  {Cloudy|180}{value|142}{rate|38.9%}",
      "  {Showers|30}{value|21}{rate|5.8%}"
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
      options: {
        title: {
          text: "销售统计图",
          subtext: "2019-12-18",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : 已售{c} 占比({d}%)"
        },
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          bottom: 10,
          left: "center",
          data: ["西瓜", "哈密瓜", "榴莲", "苹果", "甘蔗"]
        },
        series: [
          {
            name: "产品",
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              {
                value: 1548,
                name: "甘蔗"
              },
              { value: 535, name: "苹果" },
              { value: 510, name: "榴莲" },
              { value: 634, name: "哈密瓜" },
              { value: 735, name: "西瓜" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("echarts-pie"));
    myChart.setOption(this.options);
    myChart.on("mouseover", event => {
      const name = event.name;
      const data = myChart.getOption();
      data.series[0].data.forEach(item => {
        if (item.name === name) {
          // 修改参数在这修改
          item.label = label;
        } else {
          delete item.label;
        }
      });
      myChart.setOption(data);
    });
  }
};
</script>

<style>
#echarts-pie {
  width: 100%;
  height: 80vh;
}
</style>