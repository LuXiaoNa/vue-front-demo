<template>
  <div class="flight">
    <span>
        <i class="el-icon-d-arrow-right"></i>航班保障情况
    </span>
    <div id="barCharts" style="height:290px;width:100%"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "flight",
  props:["flightData"],
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
    }
  },
  mounted() {
    this.initData();
  }
};
</script>