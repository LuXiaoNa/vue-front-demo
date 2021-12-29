<template >
  <div>
    <el-row :gutter="5">
      <el-col :span="4">
        <el-card :body-style="{ padding: '0px' }" style="height: 18vh">
          <!-- 今日情况 -->
          <today-situation
            :flightData="situationData"
            :perc="perc"
          ></today-situation>
        </el-card>
        <!-- 流控受影响情况 -->
        <el-card
          :body-style="{ padding: '0px' }"
          style="margin-top: 5px; height: 415px"
        >
          <span> <i class="el-icon-d-arrow-right"></i>流控受影响情况 </span>
          <vue-seamless-scroll
            :data="flowControlData"
            :class-option="flowClassOption"
            style="height: 405px; overflow: hidden"
          >
            <div v-for="item in flowControlData" :key="item.id">
              <div class="lineStyle">
                <div style="overflow: hidden">
                  <div style="float: left">
                    <span style="fontsize: 16px; color: #0091ff">{{
                      item.flightNum
                    }}</span>
                  </div>
                  <div style="float: right">
                    <span style="fontsize: 12px; color: grey">发布单位:</span>
                    <span
                      v-if="item.restrictInfo.length > 0"
                      style="fontsize: 12px; color: grey"
                      >{{ item.restrictInfo[0].releaseUnit }}</span
                    >
                  </div>
                </div>
                <div style="margin-top: 10px">
                  <span style="fontsize: 14px; color: #cfcfcf">延误时间</span>
                  <span
                    style="fontsize: 14px; margin-left: 30px; color: #cfcfcf"
                    >结束时间</span
                  >
                </div>
                <div style="fontsize: 12px; margin-bottom: 10px">
                  <span style="color: #cfcfcf">{{ item.delayTime }}</span>
                  <span
                    style="margin-left: 40px; color: #cfcfcf"
                    v-if="item.restrictInfo.length > 0"
                  >
                    {{ item.restrictInfo[0].endTime | dateFormat2 }}
                  </span>
                </div>
                <div style="fontsize: 14px; color: #0091ff">
                  <span>流控内容:</span>
                </div>
                <div
                  v-if="item.restrictInfo.length > 0"
                  style="fontsize: 14px; color: #cfcfcf; line-height: 20px"
                >
                  {{ item.restrictInfo[0].content }}
                </div>
              </div>
            </div>
          </vue-seamless-scroll>
        </el-card>
        <!-- 专机要客 -->
        <el-card
          :body-style="{ padding: '0px' }"
          style="
            margin-top: 5px;
            height: calc(100vh - 18vh - 415px - 40px);
            overflow-y: auto;
          "
        >
          <special-plan :VipGuestData="VipGuestData"></special-plan>
        </el-card>
      </el-col>
      <!-- 中间栏 -->
      <el-col :span="15">
        <!-- 机场综合情况组件 -->
        <airport-situation
          :airportSituationData="airportSituationData"
          style="height: 18vh"
        ></airport-situation>
        <el-row :gutter="5">
          <el-col :span="17">
            <!-- 当日放行情况 -->
            <el-card
              :body-style="{ padding: '0px' }"
              style="margin-top: 5px; height: 25vh"
            >
              <release :releaseData="releaseData"></release>
            </el-card>
            <!-- 流量预测信息 -->
            <el-card
              :body-style="{ padding: '0px' }"
              style="height: calc(58vh - 46px); margin-top: 5px"
            >
              <flow :flowData="flowData"></flow>
            </el-card>
          </el-col>
          <el-col :span="7">
            <el-card
              :body-style="{ padding: '0px' }"
              style="margin-top: 5px; height: 45vh"
            >
              <div class="flex">
                <span> <i class="el-icon-d-arrow-right"></i>机位监控 </span>
                <div class="flex1"></div>
                <div class="flex2">占用</div>
                <div class="flex3"></div>
                <div class="flex4">未使用</div>
                <div class="flex5"></div>
                <div class="flex6">空闲</div>
              </div>
              <process-bar
                v-for="item in processBarModel"
                :key="item.id"
                :seatType="item.seatType"
                :seatNum="item.seatNum"
                :usedNum="item.usedNum"
                :notUseNum="item.notUseNum"
                :freeNum="item.freeNum"
                style="margin-top: 10px; margin-bottom: 10px"
              />
            </el-card>
            <el-card
              :body-style="{ paddng: '0px' }"
              style="margin-top: 5px; height: calc(38vh - 46px)"
            >
              <!-- 航班保障情况 -->
              <flight :flightData="flightData"></flight>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5">
        <el-card :body-style="{ padding: '0px' }" style="height: 18vh">
          <span> <i class="el-icon-d-arrow-right"></i>MDRS信息 </span>
          <vue-seamless-scroll
            :data="mdrsListData"
            :class-option="mdrsClassOption"
            style="height: 14vh; overflow: hidden"
          >
            <div v-for="item in mdrsListData" :key="item.id">
              <div class="lineStyle">
                <div style="overflow: hidden; fontsize: 14px">
                  <div style="float: left; color: grey">
                    {{ item.publishTime | dateFormat }}
                  </div>
                  <div style="float: right; margin-right: 10px">
                    {{ item.publishUnit }}
                  </div>
                </div>
                <div
                  v-if="mdrsListData != null && item.influList.length > 0"
                  style="
                    fontsize: 12px;
                    color: #cfcfcf;
                    line-height: 20px;
                    margin-top: 5px;
                  "
                >
                  {{ item.influList[0].content }}
                </div>
              </div>
            </div>
          </vue-seamless-scroll>
        </el-card>
        <!-- 气象概况 -->
        <el-card
          :body-style="{ padding: '0px' }"
          style="height: 25vh; margin-top: 5px"
        >
          <weather :weatherData="weatherData"></weather>
        </el-card>
        <!-- 值班信息 -->
        <el-card
          :body-style="{ padding: '0px' }"
          style="margin-top: 5px; height: calc(57vh - 40px)"
        >
          <duty :dutyData="dutydata" style="overflow: auto"></duty>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import todaySituation from "./TodaySituation";
import processBar from "./ProcessBar";
import airportSituation from "./AirportSituation";
import specialPlan from "./SpecialPlan";
import flow from "./Flow";
import release from "./Release";
import flight from "./Flight";
import weather from "./Weather";
import duty from "./Duty";
import vueSeamlessScroll from "./scroll";
import {
  getTodaySituationData,
  getflowControlData,
  getVipGuestData,
  getAirportSituationData,
  getReleaseData,
  seatControl,
  getWeatherData,
  getDutyData
} from "@/api/dashboard/monitor";
import { date2Str } from "@/utils/common.js";
export default {
  components: {
    todaySituation,
    processBar,
    airportSituation,
    specialPlan,
    flow,
    release,
    flight,
    weather,
    duty,
    vueSeamlessScroll,
  },
  data() {
    return {
      perc: 0,
      situationData: {},
      airportSituationData: {},
      flightData: [],
      releaseData: {},
      flowData: [],
      weatherData: [],
      dutydata: [],
      processBarModel: undefined,
      mdrsListData: [
        {
          publishTime: "2021-4-13 21:12:10",
          publishUnit: "AOT部门",
          influList: [
            {
              startTime: "2021-4-7 14:00",
              endTime: "2021-4-7 16:00",
              content:
                "预计从12:00开始广州机场通行能力将下降(20%),通行能力预期将于16:00恢复",
              level: "2",
            },
          ],
        },
        {
          publishTime: "2021-4-13 21:12:10",
          publishUnit: "TOC部门",
          influList: [
            {
              startTime: "2021-4-7 14:00",
              endTime: "2021-4-7 16:00",
              content: "",
              level: "4",
            },
          ],
        },
        {
          publishTime: "2021-4-13 21:12:10",
          publishUnit: "AOC部门",
          influList: [
            {
              startTime: "2021-4-7 14:00",
              endTime: "2021-4-7 16:00",
              content:
                "预计从12:00开始广州机场通行能力将下降(20%),通行能力预期将于16:00恢复",
              level: "5",
            },
          ],
        },
      ],
      flowControlData: [],
      VipGuestData: [],
    };
  },
  computed: {
    flowClassOption() {
      return {
        step: 0.2,
        limitMoveNum: 2,
        hoveStop: true,
        direction: 1,
        openWatch: true,
        singleHeight: 0,
        singleWidth: 0,
        waitTime: 1000000000,
      };
    },
    mdrsClassOption() {
      return {
        step: 0.2,
        limitMoveNum: 2,
        hoveStop: true,
        direction: 1,
        openWatch: true,
        singleHeight: 0,
        singleWidth: 0,
        waitTime: 1000000000,
      };
    },
  },
  filters: {
    dateFormat(Value) {
      if (Value != null) {
        return date2Str(Value, "YYYY-MM-DD HH:mm:ss");
      } else {
        return "";
      }
    },
    dateFormat2(Value) {
      if (Value != null) {
        return date2Str(Value, "DD日 HH:mm");
      } else {
        return "";
      }
    },
  },
  methods: {
    dateFormat(Value) {
      if (Value != null) {
        return date2Str(Value, "YYYY-MM-DD HH:mm:ss");
      } else {
        return "";
      }
    },
    //今日航班执行情况
    flightStatus() {
      getTodaySituationData().then((res) => {
        this.situationData = res.data;
        this.perc = (this.situationData.buy / this.situationData.browse) * 100;
      });
    },
    //流量预测信息
    flow() {
      getflowControlData().then((res) => {
        this.flowControlData = res.data;
      });
    },
    //专机要客
    specialData() {
      getVipGuestData().then((res) => {
        this.VipGuestData = res.data;
      });
    },
    //当日放行情况
    ReleaseData() {
        getReleaseData().then(res => {
          this.releaseData=res.data
        });
    },
    //机场综合情况
    situation() {
      getAirportSituationData().then((res) => {
        this.airportSituationData = res.data;
      });
    },
    //机位监控
    seatControl() {
      seatControl().then(res => {
        if (res.data != null) {
          this.processBarModel = res.data;
        }
      });
    },
    //航班保障情况
    flightdata() {
      //   flightData().then(res => {
      //     console.log(res.data);
      //     if (res.data != null) {
      //     }
      //   });
    },
    //气象概况
    weather() {
        getWeatherData().then(res => {
            if(res.data!=null){
                 this.weatherData=res.data
            }
        });
    },
    //值班信息
    dutyData() {
      getDutyData().then(res=>{
        this.dutydata=res.data
      })
    },
  },
  mounted() {
    this.flightStatus();
    this.ReleaseData();
    this.specialData();
    this.seatControl();
    this.situation();
    this.flightdata();
    this.flow(), this.weather();
    this.dutyData();
  },
};
</script>
<style>
.lineStyle {
  border-bottom: 1px solid #696969;
  margin: 10px auto;
  padding-bottom: 5px;
  width: 94%;
}
.el-progress-circle__track {
  color: #4c4c4c;
}
.flex {
  -webkit-display: flex;
  display: flex;
}
.flex1,
.flex2,
.flex3,
.flex4,
.flex5,
.flex6 {
  height: 10px;
  width: 10px;
  margin: 1px;
  color: grey;
}
.flex1 {
  margin-left: 30px;
  margin-top: 5px;
  background-color: #0091ff;
}
.flex2,
.flex6 {
  font-size: 5px;
  width: 35px;
}
.flex4 {
  font-size: 5px;
  width: 40px;
}
.flex3 {
  margin-top: 5px;
  background-color: #65f6ff;
}
.flex5 {
  margin-top: 5px;
  background-color: #292929;
}
</style>