<template>
  <div class="flow">
    <div id="flowEcharts" style="height:490px;width:100%"></div>
  </div>
</template>
<script>
// import {
//   flowData
// } from "@/api/dashboard/dashboard.js";
import echarts from "echarts";
export default {
  name: "flow",
  data() {
    return {};
  },
  methods: {
    initData() {
      var myFlowChart = echarts.init(document.getElementById("flowEcharts"));
      //   flowData().then(res => {
      //        console.log(res.data);
      // if (res.data != null) {
      var colors = ["#77C1E7", "#058DD2", "#B7ACF5", "#725FE0"];
      const option = {
        color: colors, //下面这种直接配置演示也行
        title: {
          left: "center" //title 组件离容器左侧的距离，也可以是像素，和百分比
        },

        tooltip: {
          trigger: "axis", //触发类型；轴触发，axis则鼠标hover到一条柱状图显示全部数据，item则鼠标hover到折线点显示相应数据，
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow' | 'cross' , shadow表示阴影，cross为十字准星
          },

          formatter: function(params) {
            //params[0].marker,marker参数为提示语前面的小圆点
            return (
              params[0].name +
              "<br>" +
              params[0].marker +
              "计划到港：" +
              params[0].value +
              "<br>" +
              params[1].marker +
              "实际到港：" +
              params[1].value +
              "<br>" +
              params[2].marker +
              "计划离港：" +
              -params[2].value +
              "<br>" +
              params[3].marker +
              "实际离港：" +
              -params[3].value
            );
          }
        },
        legend: {
          data: ["计划到港", "实际到港", "计划离港", "实际离港"],
          textStyle:{
              color:"White"
          },
          left: "right" //组件离容器左侧的距离，可以是left,center,right，也可以是像素px和百分比10%
        },
        //backgroundColor: '#00199',//整个绘图背景色
        grid: {
          left: "3%",
          right: "4%",
          bottom: "9%", //网格图（柱状图、折线图、气泡图等）离底部的距离，也可以用像素比如10px
          containLabel: true //grid 区域是否包含坐标轴的刻度标签。false可能溢出，默认为false
        },
        xAxis: [
          {
            type: "category",
            splitLine:{
                show:false
            },
            axisLine:{
              lineStyle:{
                  color:"#4C4C4C",

              }
            },
            axisLabel: {
              textStyle: {
                color: "White"
              }
            },

            data: ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00","13:00","14:00","15:00"]
          }
        ],
        yAxis: [
          {
            type: "value",
              splitLine:{
                show:false
            },
            axisTick: {
              show: false
            },
            // axisLabel: {
            //   textStyle: {
            //     color: "#4C4C4C"
            //   },
            //   //让x轴左边的数显示为正数
            //   formatter: function(v) {
            //     return v > 0 ? v : -v;
            //   }
            // }
          }
        ],
        series: [
          {
            name: "计划到港",
            type: "bar",
            //stack: '总量',
            label: {
              show: true,
              position: "top"
            },
            data: [320, 302, 341, 374, 390, 450, 420,150,241,310]
          },
          {
            name: "实际到港",
            type: "bar",
            //stack: '总量',
            label: {
              show: true,
              position: "top"
            },
            data: [200, 170, 240, 244, 200, 220, 210,241,150,240]
          },
          {
            name: "计划离港",
            type: "bar",
            //  stack: '总量',
            //position: 'left',
            label: {
              show: true, //控制柱状图是否显示数值
              position: "bottom",
              formatter: function(params) {
                //格式化柱状图里的数字
                return -params.value;
              }
            },
            data: [-120, -132, -101, -134, -190, -230, -210,-150,-210,-160]
          },
          {
            name: "实际离港",
            type: "bar",
            //  stack: '总量',
            label: {
              show: true, //控制柱状图是否显示数值
              position: "bottom",
              formatter: function(params) {
                //格式化柱状图里的数字
                return -params.value;
              }
            },
            data: [-130, -142, -111, -124, -140, -210, -230,-170,-213,-180]
          }
        ]
      };
      myFlowChart.setOption(option);
      // };

      //   });
    }
  },
  mounted() {
    this.initData();
  }
};
</script>