<template>
  <div class="hello">
    <div class="gante"></div>
  </div>
</template>
<script>
import { getGante } from "@/api/other/gante.js";
import * as echarts from "echarts";
import { date2Str } from "@/utils/common.js";
export default {
  name: "hello",
  data() {
    return {};
  },
  methods: {
    getGante() {
      getGante().then((res) => {
        var yCarData = [];
        var minTime = date2Str(new Date(), "YYYY/MM/DD") + " 00:00";
        var maxTime =
          date2Str(new Date().getTime() + 24 * 60 * 60 * 1000, "YYYY/MM/DD") +
          " 00:00";
        var timeInterval = Math.floor(
          (new Date(maxTime).getTime() - new Date(minTime).getTime()) / 32
        );
        console.log(timeInterval)
        if (res.data != null) {
          var barData = [];
          var arr = [];
          for (let i = 0; i < res.data.length; i++) {
            yCarData.push(res.data[i].name);
            for (let j = 0; j < res.data[i].taskList.length; j++) {
              var obj = { value: [] };
              obj.value[0] = i;
              obj.value[1] = date2Str(
                res.data[i].taskList[j].startTime,
                "YYYY/MM/DD HH:mm"
              );
              obj.value[2] = date2Str(
                res.data[i].taskList[j].endTime,
                "YYYY/MM/DD HH:mm"
              );
              obj.value[3] = res.data[i].taskList[j].taskName;
              obj.value[4] = res.data[i].taskList[j].status;
              arr.push(obj);
            }
          }
          barData.push(...arr);
          var ganteChart = echarts.init(
            document.getElementsByClassName("gante")[0]
          );
          // echart配置
          var option = {
            color: "#0A8BFF",
            backgroundColor: "#303233",
            title: {
              subtext: "人员",
            },
            tooltip: {
              //悬浮提示
              enterable: true,
              hideDelay: 100,
              backgroundColor: "rgba(255,255,255,1)", //背景颜色（此时为默认色）
              borderRadius: 5, //边框圆角
              padding: 5,
              textStyle: {
                color: "#000",
              },
              formatter: function (params) {
                let startTime = params.value[1].substr(-5, 5);
                let endTime = params.value[2].substr(-5, 5);
                if (params.value[4] == "A") {
                  var status = "已下发";
                } else if (params.value[4] == "T") {
                  status = "已接收";
                } else if (params.value[4] == "S") {
                  status = "已就位";
                } else if (params.value[4] == "D") {
                  status = "执行中";
                } else if (params.value[4] == "F") {
                  status = "已完成";
                }
                return (
                  "状态：" +
                  status +
                  "<br>" +
                  "任务名称：" +
                  params.value[3] +
                  "<br>" +
                  "工作时段：" +
                  startTime +
                  "-" +
                  endTime
                );
              },
            },
            legend: {
              //图例
              left: "90px",
              top: "6%",
              itemWidth: 16,
              itemHeight: 16,
              selectedMode: false, // 图例设为不可点击
              textStyle: {
                color: "rgba(0, 0, 0, 0.45)",
                fontSize: 14,
              },
            },
            grid: {
              left: "1%",
              right: "2%",
              top: "3%",
              bottom: "5%",
              containLabel: true,
            },
            xAxis: {
              type: "time",
              position: "top",
              // interval: 200, //以timeInterval时间递增
              // max: maxTime,
              // min: minTime, //将data里最小时间的整点时间设为min,否则min会以data里面的min为开始进行整点递增
              axisLabel: {
                formatter: function (value) {
                  var data = new Date(value);
                  var minute = date2Str(data, "HH:mm");
                  return minute;
                },
                textStyle: {
                  color: "white", //更改坐标轴文字颜色
                  fontSize: 14, //更改坐标轴文字大小
                },
              },
              splitLine: {
                //刻度线
                lineStyle: {
                  color: "grey",
                },
              },
              axisLine: {
                lineStyle: {
                  color: "grey",
                },
              },
            },
            yAxis: {
              axisLine: {
                lineStyle: {
                  color: "grey",
                },
              },
              axisTick: {
                type: "dotted",
                inside: true,
                length: 1753,
              },
              data: yCarData,
              axisLabel: {
                textStyle: {
                  color: "white",
                  fontSize: 14,
                },
              },
            },
            series: [
              {
                type: "custom",
                renderItem: function (params, api) {
                  //开发者自定义的图形元素渲染逻辑，是通过书写 renderItem 函数实现的
                  var categoryIndex = api.value(0); //这里使用 api.value(0) 取出当前 dataItem 中第一个维度的数值。
                  var start = api.coord([api.value(1), categoryIndex]); // 这里使用 api.coord(...) 将数值在当前坐标系中转换成为屏幕上的点的像素值。
                  var end = api.coord([api.value(2), categoryIndex]);
                  var height = 20;
                  return {
                    type: "rect", // 表示这个图形元素是矩形rect。还可以是 'circle', 'sector', 'polygon' 等等。
                    shape: echarts.graphic.clipRectByRect(
                      {
                        // 矩形的位置和大小。
                        x: start[0],
                        y: start[1] - height / 2,
                        width: end[0] - start[0],
                        height: height,
                      },
                      {
                        // 当前坐标系的包围盒。
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height,
                      }
                    ),
                    style: api.style(),
                  };
                },
                encode: {
                  x: [1, 2], // data 中『维度1』和『维度2』对应到 X 轴
                  y: 0, // data 中『维度0』对应到 Y 轴
                },
                itemStyle: {
                  normal: {
                    borderRadius: 5,
                    color: function (params) {
                      if (params.data !== null) {
                        if (
                          params.data.value[4] == "A" ||
                          params.data.value[4] == "T" ||
                          params.data.value[4] == "S" ||
                          params.data.value[4] == "D"
                        ) {
                          return "#deb887"; //进行中的背景颜色
                        } else if (params.data.value[4] == "F") {
                          return "#9d9d9d"; //完成的背景颜色
                        }
                      }
                    },
                  },
                },
                data: barData,
              },
            ],
          };
          ganteChart.setOption(option);
        }
      });
    },
  },
  mounted() {
    this.getGante();
  },
};
</script>
<style>
.gante {
  height: calc(100vh - 120px);
  width: 100%;
  overflow: auto;
}
</style>