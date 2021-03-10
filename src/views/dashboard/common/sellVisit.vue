<template>
  <div id="sellVisit">
    <el-row>
      <el-col :span="18">
        <div id="sellChart" style="height: 300px; width: 1000px"></div>
      </el-col>
      <el-col :span="6">
        <h4>门店销售额排名</h4>
        <el-table :data="tableData">
          <el-table-column prop="order" label="排名"> </el-table-column>
          <el-table-column prop="name" label="店名"> </el-table-column>
          <el-table-column prop="orderQuantity" label="订单量">
          </el-table-column>
          <el-table-column prop="sellMoney" label="销售额"> </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import echarts from "echarts";
import { getBarData, getSellData } from "@/api/tabel/tabelBase.js";
export default {
  name: "sellVisit",
  data() {
    return {
      tableData: [],
      active:this.activeName,
     // echartTitle: "销售趋势",
      //   Color: this.barColor,
      //   tabFlag: this.tabFlag,
    };
  },
  props: {
    // echartTitle: {
    //   required: true,
    //   type: String,
    //   default: "销售趋势",
    // },
    // barColor: {
    //   required: true,
    //   type: Array,
    //   default: ["#9B30FF"],
    // },
    activeName: {
      required: true,
      type: String,
      default: "first",
    },
  },
  methods: {
    initData() {
        console.log(this.active)
      if (this.active == "first") {
        this.echartTitle = "销售趋势";
        this.barColor = ["#9B30FF"];
      } else {
        this.echartTitle = "访问量";
         this.barColor = ["#DA70D6"];
      }
      this.mySellChart = echarts.init(document.getElementById("sellChart"));
      console.log(this.echartTitle);
      getBarData().then((res) => {
        var xData = res.data.x;
        var yData = res.data.y;
        const sellOption = {
          title: {
            text: this.echartTitle,
            fontSize: 12,
          },
          color: this.barColor,
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          xAxis: {
            type: "category",
            data: xData,
            axisTick: {
              alignWithLabel: true,
            },
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: yData,
              type: "bar",
              barwidth: "60%",
            },
          ],
        };
        this.mySellChart.setOption(sellOption);
      });

      //门店销售额获取数据
      getSellData().then((res) => {
        this.tableData = res.data;
      });
    },
  },
  mounted() {
    this.initData();
  },
};
</script>