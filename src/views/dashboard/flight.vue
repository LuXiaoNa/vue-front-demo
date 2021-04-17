<template>
  <div class="flight">
    <div id="barCharts" style="height:290px;width:100%"></div>
  </div>
</template>
<script>
// import {
//   flightData
// } from "@/api/dashboard/dashboard.js";
import echarts from "echarts";
export default {
  name: "flight",
  data() {
    return {};
  },
  methods: {
    initData() {
      var myFlightChart = echarts.init(document.getElementById("barCharts"));
      const option = {
        color: ["#0091FF", "#1E4E72"],
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: "right",
          textStyle: {
            color: "White"
          }
        },
        series: [
          {
            type: "pie",
            radius: "50%",
            label: {
              normal: {
                position: "inner"
              }
            },
            //   center: ["50%", "60%"],
            data: [
              { value: 50, name: "执行" },
              { value: 40, name: "计划" }
            ]
          }
        ]
      };
      myFlightChart.setOption(option);
      //   flightData().then(res => {
      //     console.log(res.data);
      //     if (res.data != null) {
      //     }
      //   });
    }
  },
  mounted() {
    this.initData();
  }
};
</script>