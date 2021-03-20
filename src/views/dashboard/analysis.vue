<template>
  <div id="hello">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="销售额" name="first">
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
              <el-table-column prop="sellMoney" label="销售额">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="访问量" name="second">
        <el-row>
          <el-col :span="18">
            <div id="visiteChart" style="height: 300px; width: 1000px"></div>
          </el-col>
          <el-col :span="6">
            <h4>门店访问量排名</h4>
            <el-table :data="tableData">
              <el-table-column prop="order" label="排名"> </el-table-column>
              <el-table-column prop="name" label="店名"> </el-table-column>
              <el-table-column prop="orderQuantity" label="订单量">
              </el-table-column>
              <el-table-column prop="sellMoney" label="销售额">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>销售额类别占比</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >操作按钮</el-button
            >
          </div>
          <div id="pieChart" style="height: 300px; width: 600px"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>销售额对比图</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >操作按钮</el-button
            >
          </div>
          <div id="lineChart" style="height: 300px; width: 600px"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>用户分布</span>
          </div>
          <div id="userChart" style="height: 400px; width: 1400px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import echarts from "echarts";
import {
  getBarData,
  getSellData,
  getPieChartData,
  getLineChartData,
  getUserData,
} from "@/api/dashboard/analysis.js";
export default {
  data() {
    return {
      tableData: [],
      mySellChart: null,
      myPieChart: null,
      myLineChart: null,
      myUserChart: null,
      activeName: "first",
      barColor: ["#9B30FF"],
      echartTitle: "销售趋势",
    };
  },
  methods: {
    handleClick() {
      if (this.activeName == "first") {
        this.echartTitle = "销售趋势";
        this.barColor = ["#9B30FF"];
      } else if (this.activeName == "second") {
        this.echartTitle = "访问量";
        this.barColor = ["#FF3030"];
        console.log(document.getElementById("visiteChart"));
        this.mySellChart = echarts.init(document.getElementById("visiteChart"));
        this.sellInitData();
      }
    },
    sellInitData() {
      this.mySellChart.showLoading();
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
        this.mySellChart.hideLoading();
        this.mySellChart.setOption(sellOption);
      });
      //门店销售额获取数据
      getSellData().then((res) => {
        this.tableData = res.data;
      });
    },
    pieData() {
      this.myPieChart = echarts.init(document.getElementById("pieChart"));
      this.myPieChart.showLoading();
      getPieChartData().then((res) => {
        var pieData = res.data;
        var option = {
          tooltip: {
            trigger: "item",
          },
          legend: {
            top: "5%",
            left: "center",
          },
          series: [
            {
              name: "销售额",
              type: "pie",
              radius: ["60%", "50%"],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "20",
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
              data: pieData,
            },
          ],
        };
        this.myPieChart.hideLoading();
        this.myPieChart.setOption(option);
      });
    },
    lineData() {
      this.myLineChart = echarts.init(document.getElementById("lineChart"));
      this.myLineChart.showLoading();
      getLineChartData().then((res) => {
        var linedata = res.data;
        var option = {
          //   title: {
          //     text: "销售额对比图",
          //   },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: ["家用电器", "个护健康", "服饰箱包", "母婴产品", "其他"],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
          yAxis: {
            type: "value",
          },
          series: linedata,
        };
        this.myLineChart.hideLoading();
        this.myLineChart.setOption(option);
      });
    },
    userData() {
      this.myUserChart = echarts.init(document.getElementById("userChart"));
      getUserData().then((res) => {
        console.log(res.data);
        var xData = res.data.x;
        var yData = res.data.y;
        const option = {
          color: "#FFA500",
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
              barwidth: "40%",
            },
          ],
        };
        this.myUserChart.hideLoading();
        this.myUserChart.setOption(option);
      });
    },
  },
  mounted() {
    this.mySellChart = echarts.init(document.getElementById("sellChart"));
    this.sellInitData();
    this.pieData();
    this.lineData();
    this.userData();
  },
};
</script>
