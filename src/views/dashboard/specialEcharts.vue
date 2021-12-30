<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="24">
        <lique v-for="item in liqueData" :key="item.id" :Data="item"></lique>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" style="margin-top: 10px; margin-left: 10px">
        <el-card class="box-card">
          <div ref="gaugeEchart" style="height: 210px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";
import lique from "@/views/dashboard/lique";
import { getLiqueData } from "@/api/dashboard/specialEcharts";
export default {
  components: { lique },
  data() {
    return {
      liqueData: [],
    };
  },
  methods: {
    liqueInitData() {
      getLiqueData().then((res) => {
        this.liqueData = res.data;
      });
    },
    //仪表盘
    gaugeInit() {
      var option = {
        series: [
          //刻度盘
          {
            type: "gauge",
            center: ["50%", "50%"],
            startAngle: 0, //仪表盘起始角度
            endAngle: 360, //仪表盘结束角度
            min: 0,
            max: 360,
            splitNumber: 12, //坐标轴的分割段数
            itemStyle: {
              color: "#5199F4",
            },
            axisTick: {
              show: false,
            },
            //仪表盘轴线
            axisLine: {
              lineStyle: {
                width: 1,
                color: [[1, "#dfe0e0"]],
              },
            },
            //坐标轴在grid区域中的分割线
            splitLine: {
              distance: 5, //距离图形元素的距离
              length: 6,
              lineStyle: {
                width: 1,
                // color: "#dfe0e0",
              },
            },
            //刻度标签
            axisLabel: {
              distance: -35, //标线与刻度线的距离
              //   color: "#dfe0e0",
              fontSize: 14,
            },
            //仪表盘指针
            pointer: {
              length: "120%", //指针长度
              width: 16,
              icon: "arrow",
            },
            anchor: {
              show: false,
            },
            title: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: "0",
              },
            ],
          },
          //10分钟
          {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 0,
            endAngle: 20,
            min: 0,
            max: 360,
            itemStyle: {
              color: "#FD7347",
            },
            // progress: {
            //   show: true,
            //   width: 8
            // },
            pointer: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                width: 1,
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 10,
              },
            ],
          },

          {
            type: "gauge",
            startAngle: 0,
            endAngle: 360,
            min: 0,
            max: 360,
            radius: "64%",
            opacity: 1,
            //图表标注
            markPoint: {
              symbol: "roundRect", //标记的图形
              symbolSize: [40, 20], //标记的宽、高
              // symbolOffset:[0,20],
              data: [
                //跟你的仪表盘的中心位置对应上，颜色可以和画板底色一样
                {
                  //value: this.direction,  //标注值
                  value: "10",
                  x: "center",
                  y: "center",
                  itemStyle: {
                    color: "#486778",
                    borderColor: "#486778",
                    borderRadius: 10,
                    borderWidth: 0,
                    opacity: 0.8,
                  },
                },
              ],
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    // color: "#000", //气泡中字体颜色
                    color: "#40B3E1",
                    fontSize: 10,
                    formatter: function (obj) {
                      //   return this.direction + "\n" + this.current + " m/s";
                      return "10" + " m/s";
                    },
                  },
                },
              },
            },
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                width: 0,
              },
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              distance: 50,
            },
            // data: [
            //   {
            //     value: this.direction
            //   }
            // ],
            detail: { show: false },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option);
    },
  },
  mounted() {
    this.liqueInitData();
    this.myChart = echarts.init(this.$refs.gaugeEchart);
    this.gaugeInit();
  },
};
</script>