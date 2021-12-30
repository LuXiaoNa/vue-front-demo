<template>
  <div>
    <el-col :span="6">
      <!-- <div :style="backStyle" class="backClass"> -->
      <el-card class="box-card">
        <el-row>
          <el-col :span="9">
            <div style="height: 130px" ref="liqiuChart"></div>
            <div style="text-align: center">
              <span style="color: #60cef4">{{
                Data.liqueImplement.finish
              }}</span>
              <span>/{{ Data.liqueImplement.sumCount }}</span>
            </div>
          </el-col>
          <el-col :span="15">
            <el-table
              empty-text="暂无数据"
              :data="Data.tableData"
              border
              stripe
              :show-header="false"
              class="animate__animated animate__tada"
            >
              <el-table-column prop="name" label="名称" width="60px"></el-table-column>
              <el-table-column prop="finish" label="数量" width="67px">
                <template slot-scope="scope">
                  <span style="color: #60cef4">{{ scope.row.finish }}</span>
                  <span>/{{ scope.row.sumCount }}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-card>
      <!-- </div> -->
    </el-col>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  props: ["Data"],
  watch: {
    Data(newValue) {
      console.log(newValue);
      this.myChart = echarts.init(this.$refs.liqiuChart);
      this.initData();
    },
  },
  //可添加背景图
  // computed: {
  //   backStyle() {
  //     var backgronud = {};
  //     switch (this.Data.liqueImplement.name) {
  //       case "位置1":
  //         backgronud = {
  //           backgroundImage:
  //             "url(" + require("../../assets/image/1.png") + ")"
  //         };
  //         break;
  //       case "位置2":
  //         backgronud = {
  //           backgroundImage:
  //             "url(" + require("../../assets/image/2.png") + ")"
  //         };
  //         break;
  //       case "位置3":
  //         backgronud = {
  //           backgroundImage:
  //             "url(" + require("../../assets/image/3.png") + ")"
  //         };
  //         break;
  //       case "位置4":
  //         backgronud = {
  //           backgroundImage:
  //             "url(" + require("../../assets/image/4.png") + ")"
  //         };
  //         break;
  //     }
  //     return backgronud;
  //   }
  // },
  data() {
    return {
      name: "lique",
      option: {
        series: [
          {
            type: "liquidFill",
            radius: "78%",
            name: "",
            center: ["40%", "50%"],
            shape: "circle",
            phase: 0,
            direction: "right",
            outline: {
              itemStyle: {
                opacity: 1,
                borderWidth: 1,
                borderColor: "#55aac7",
              },
            },
            backgroundStyle: {
              color: "white", //水球未到的背景颜色
              borderColor: "#55aac7",
            },
            itemStyle: {
              color: "#55aac7", //水球显示的背景颜色
            },
            //图形上的文本标签
            label: {
              fontSize: 16,
              fontWeight: 200,
            },
            data: [], //系列中的数据内容数组
          },
        ],
      },
    };
  },
  methods: {
    initData() {
      this.option.series[0].data[0] =
        this.Data.liqueImplement.finish / this.Data.liqueImplement.sumCount;
      this.myChart.setOption(this.option);
    },
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.liqiuChart);
    this.initData();
  },
};
</script>
<style scoped>
/* .backClass {
  height: 300px;
  width: 410px;
  position: relative;
} */
</style>