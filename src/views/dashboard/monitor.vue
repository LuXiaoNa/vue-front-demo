<template>
  <div class="hello">
    <el-row :gutter="22">
      <el-col :span="5">
        <el-card :body-style="{ padding: '0px' }">
          <!-- 今日情况 -->
          <todaySituation></todaySituation>
        </el-card>
      </el-col>
      <el-col :span="14">
        <!-- 机场综合情况组件 -->
        <situation></situation>
      </el-col>
      <el-col :span="5">
        <el-card :body-style="{ padding: '0px' }">
          <span> <i class="el-icon-d-arrow-right"></i>基本信息</span>
          <vue-seamless-scroll
            :data="baseData"
            :class-option="classOption"
            style="height:150px;overflow:hidden;margin-left:10px;margin-right:10px"
          >
            <div v-for="item in baseData" :key="item.id">
              <div style="margin-top:10px;">
                <span style="color:grey;fontSize:10px;">{{item.publishTime}}</span>
                <span style="fontSize:12px;margin-left:8%">{{item.publishUnit}}</span>
              </div>
              <div style="fontSize:12px;">{{item.contentData[0].content}}</div>
            </div>
          </vue-seamless-scroll>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="22" style="margin-top:5px">
      <el-col :span="5">
        <el-card :body-style="{ padding: '0px' }">
          <span><i class="el-icon-d-arrow-right"></i>流控受影响情况</span>
          <vue-seamless-scroll
            :data="flowControlData"
            :class-option="classOption"
            style="height:440px;overflow:hidden;margin-left:10px;margin-right:10px"
          >
            <div v-for="item in flowControlData" :key="item.id">
              <div style="margin-top:10px;">
                <span style="fontSize:16px;">{{item.flightNum}}</span>
                <span
                  style="fontSize:12px;margin-left:40%;color:grey"
                >发布单位:{{item.restrictInfo[0].releaseUnit}}</span>
              </div>
              <div style="fontSize:10px;color:grey;margin-top:10px">
                <span>延误时间</span>
                <span style="margin-left:20px">结束时间</span>
              </div>
              <div style="fontSize:10px;color:grey;margin-bottom:10px">
                <span style="color:#0091FF">{{item.delayTime}}</span>
                <span style="margin-left:20px">{{item.restrictInfo[0].endTime}}</span>
              </div>
              <div>
                <span style="fontSize:10px;color:grey;">流控内容</span>
              </div>
              <div style="fontSize:10px;">{{item.restrictInfo[0].content}}</div>
              <div
                style="width:310px;border-bottom:1px solid #696969;margin-top:10px;margin-bottom:20px"
              ></div>
            </div>
          </vue-seamless-scroll>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card :body-style="{ padding: '0px' }">
          <span><i class="el-icon-d-arrow-right"></i>当日放行情况</span>
          <div style="margin-top:5%;margin-bottom:5%;position:relative">
            <span
              style="position:absolute;margin-left:17%;margin-top:5%;color:grey;fontSize:15px"
            >始发正常率</span>
            <el-progress
              type="circle"
              :percentage="nomalRate"
              style="margin-left:13%;margin-right:10%;"
            ></el-progress>
            <span
              style="position:absolute;margin-left:4%;margin-top:5%;color:grey;fontSize:15px"
            >放行正常率</span>
            <el-progress type="circle" :percentage="releaseRate"></el-progress>
            <span
              style="position:absolute;margin-left:11%;margin-top:5%;color:grey;fontSize:15px"
            >本月放行正常率</span>
            <el-progress
              type="circle"
              :percentage="avgRate"
              style="margin-left:10%;margin-right:10%"
            ></el-progress>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card :body-style="{ padding: '0px' }">
          <div class="flex">
            <span><i class="el-icon-d-arrow-right"></i>机位监控</span>
            <div class="flex1"></div>
            <div class="flex2">占用</div>
            <div class="flex3"></div>
            <div class="flex4">分配未使用</div>
            <div class="flex5"></div>
            <div class="flex6">空闲</div>
          </div>
          <processBar
            v-for="item in processBarModel"
            :key="item.id"
            :seatType="item.seatType"
            :seatNum="item.seatNum"
            :usedNum="item.usedNum"
            :notUseNum="item.notUseNum"
            :freeNum="item.freeNum"
            style="margin-top:15px"
          />
        </el-card>
      </el-col>
      <el-col :span="5" style="margin-top:-10px">
        <el-card :body-style="{ padding: '0px' }">
          <span><i class="el-icon-d-arrow-right"></i>气象概况</span>
          <span style="margin-left:65%;fontSize:14px;color:grey">
            <i class="el-icon-location-outline"></i>淮安
          </span>
          <weather style="margin-top:20px"></weather>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="22">
      <el-col :span="5" style="margin-top:6px">
        <el-card :body-style="{ padding: '0px' }">
          <span><i class="el-icon-d-arrow-right"></i>专机要客</span>
          <!-- <div style="height:250px"></div> -->
          <vue-seamless-scroll
            :data="VipGuestData"
            :class-option="classOption"
            style="height:250px;overflow:hidden;margin-left:10px;margin-right:10px"
          >
            <div v-for="item in VipGuestData" :key="item.id">
              <el-row style="margin-bottom:10px">
                <el-col :span="5" :offset="1">
                  <span>{{item.flightNum}}</span>
                  <div style="width:50px;height:15px;border-radius:15px;background:#0091FF;fontSize:8px;color:#000000">VIP贵宾</div>
                </el-col>
                <el-col :span="4">
                  <span style="fontSize:4px;color:#52B137">{{item.status}}</span>
                </el-col>
                <el-col :span="3" :offset="3">
                  <span style="color:grey;fontSize:10px">机位</span>
                  <span style="color:#0091FF;fontSize:10px">{{item.seat}}</span>
                </el-col>
                <el-col :span="3">
                  <span style="color:grey;fontSize:10px">航线</span>
                  <span style="fontSize:10px">{{item.route}}</span>
                </el-col>
                <el-col :span="3">
                  <span style="color:grey;fontSize:10px">机型</span>
                  <span style="fontSize:10px">{{item.typeCode}}</span>
                </el-col>
              </el-row>
              <el-row style="margin-bottom:10px">
                <el-col :span="5" :offset="1">
                  <span style="color:grey;fontSize:10px">到港航班</span>
                  <span style="fontSize:10px">{{item.arrFlightNum}}</span>
                </el-col>
                <el-col :span="4" :offset="1">
                  <span style="color:grey;fontSize:10px">计划时间</span>
                  <span style="fontSize:4px;">{{item.planArrTime}}</span>
                </el-col>
                <el-col :span="4" :offset="1">
                  <span style="color:grey;fontSize:10px">预计时间</span>
                  <span style="fontSize:10px">{{item.expectArrTime}}</span>
                </el-col>
                <el-col :span="4" :offset="1">
                  <span style="color:grey;fontSize:10px">实际时间</span>
                  <span style="fontSize:10px">{{item.realArrTime}}</span>
                </el-col>
              </el-row>
              <el-row style="margin-bottom:10px">
                <el-col :span="5" :offset="1">
                  <span style="color:grey;fontSize:10px">离港航班</span>
                  <span style="fontSize:10px">{{item.flightNum}}</span>
                </el-col>
                <el-col :span="4" :offset="1">
                  <span style="color:grey;fontSize:10px">计划时间</span>
                  <span style="fontSize:4px;">{{item.planDepTime}}</span>
                </el-col>
                <el-col :span="4" :offset="1">
                  <span style="color:grey;fontSize:10px">预计时间</span>
                  <span style="fontSize:10px">{{item.expectDepTime}}</span>
                </el-col>
                <el-col :span="4" :offset="1">
                  <span style="color:grey;fontSize:10px">实际时间</span>
                  <span style="fontSize:10px">{{item.realDepTime}}</span>
                </el-col>
              </el-row>
              <div
                style="width:310px;border-bottom:1px solid #696969;margin-top:10px;margin-bottom:20px"
              ></div>
            </div>
          </vue-seamless-scroll>
        </el-card>
      </el-col>
      <el-col :span="10" style="margin-top:-235px">
        <el-card :body-style="{ padding: '0px' }">
          <span><i class="el-icon-d-arrow-right"></i>流量预测信息</span>
          <flow></flow>
        </el-card>
      </el-col>
      <el-col :span="4" style="margin-top:-42px">
        <el-card :body-style="{ padding: '0px' }">
          <span><i class="el-icon-d-arrow-right"></i>航班保障情况</span>
          <flight></flight>
        </el-card>
      </el-col>
      <el-col :span="5" style="margin-top:-207px">
        <el-card :body-style="{ padding: '0px' }">
         <!-- 值班信息 -->
          <duty style="height:450px;overflow:auto;"></duty>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import todaySituation from "./todaySituation";
import processBar from "./processBar";
import situation from "./situation";
import flow from "./flow";
import flight from "./flight";
import weather from "./weather";
import duty from "./duty";
import vueSeamlessScroll from "./scroll";
import {
  baseData,
//   releaseData,
// seatControl
} from "@/api/dashboard/monitor.js";
import { date2Str } from "@/utils/common.js";
export default {
  components: {
    todaySituation,
    processBar,
    situation,
    flow,
    flight,
    weather,
    duty,
    vueSeamlessScroll
  },
  data() {
    return {
      perc: "",
      nomalRate: "",
      releaseRate: "",
      avgRate: "",
      processBarModel: undefined,
      baseData:[],
      flowControlData: [
        {
          flightNum: "MU3331",
          delayTime: "30min",
          id: "253345654325",
          restrictInfo: [
            {
              releaseUnit: "OMC",
              startTime: "2021-04-07 14:00",
              endTime: "2021-04-07 14:30",
              content:
                "流控受影响航班流控受影响航班流控受影响航班流控受影响航班流控受影响航班流控受影响航班"
            }
          ]
        },
        {
          flightNum: "MU1111",
          delayTime: "30min",
          id: "253345232654325",
          restrictInfo: [
            {
              releaseUnit: "OMC",
              startTime: "2021-04-07 14:00",
              endTime: "2021-04-07 14:30",
              content:
                "流控受影响航班流控受影响航班流控受影响航班流控受影响航班流控受影响航班流控受影响航班"
            }
          ]
        },
        {
          flightNum: "MU2221",
          delayTime: "30min",
          id: "253345654444325",
          restrictInfo: [
            {
              releaseUnit: "OMC",
              startTime: "2021-04-07 14:00",
              endTime: "2021-04-07 14:30",
              content:
                "流控受影响航班流控受影响航班流控受影响航班流控受影响航班流控受影响航班流控受影响航班"
            }
          ]
        }
      ],
      VipGuestData: [
        {
          flightNum: "HU3691",
          status: "前站起飞",
          seat: "B329",
          route: "25231",
          typeCode: "B373",
          arrFlightNum: "HU3693",
          // depFlightNum: "HU3691",
          planArrTime: "10:30",
          expectArrTime: "10:26",
          realArrTime: "10:30",
          planDepTime: "10:30",
          expectDepTime: "10:26",
          realDepTime: "10:30"
        },
        {
          flightNum: "HU3691",
          status: "本站起飞",
          seat: "B329",
          route: "25231",
          typeCode: "B373",
          arrFlightNum: "HU3691",
          // depFlightNum: "HU3693",
          planArrTime: "10:30",
          expectArrTime: "10:26",
          realArrTime: "10:30",
          planDepTime: "10:30",
          expectDepTime: "10:26",
          realDepTime: "10:30"
        }
      ]
    };
  },
  computed: {
    classOption() {
      return {
        step: 0.2,
        limitMoveNum: 2,
        hoveStop: true,
        direction: 1,
        openWatch: true,
        singleHeight: 0,
        singleWidth: 0,
        waitTime: 1000000000
      };
    }
  },
  methods: {
    dateFormat(Value) {
      if (Value != null) {
        return date2Str(Value, "YYYY-MM-DD HH:mm:ss");
      } else {
        return "";
      }
    },
    //基础信息
     initBaseData(){ 
       baseData().then(res=>{
         this.baseData=res.data
       })
     },
    //当日放行情况
    releaseData() {
      this.nomalRate = 20;
      this.releaseRate = 46;
      this.avgRate = 30;
      //   releaseData().then(res => {
      //     console.log(res.data);
      //     this.nomalRate = res.data.nomalRate;
      //     this.releaseRate = res.data.releaseRate;
      //     this.avgRate = res.data.releaseAvgRate;
      //   });
    },
    //机位监控
    seatControl() {
      this.processBarModel = [
        {
          id: "2543445543",
          seatType: "B",
          seatNum: 38,
          usedNum: 2,
          notUseNum: 16,
          freeNum: 20
        },
        {
          id: "254433gfhv4dsd",
          seatType: "C",
          seatNum: 60,
          usedNum: 4,
          notUseNum: 26,
          freeNum: 30
        },
        {
          id: "254422gfhv4dsd",
          seatType: "F",
          seatNum: 44,
          usedNum: 8,
          notUseNum: 16,
          freeNum: 20
        },
        {
          id: "254422g2fhv4dsd",
          seatType: "E",
          seatNum: 36,
          usedNum: 20,
          notUseNum: 6,
          freeNum: 10
        },
        {
          id: "254422g2fhv4ds2d",
          seatType: "D",
          seatNum: 26,
          usedNum: 23,
          notUseNum: 12,
          freeNum: 13
        }
      ];
      // seatControl().then(res => {
      //   console.log(res.data);
      //   if (res.data != null) {
      //     this.processBarModel = res.data;
      //   }
      // });
    }
  },
  mounted() {
    this.initBaseData();
    this.flightStatus();
    this.releaseData();
    this.seatControl();
  }
};
</script>
<style>
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
  border: 1px solid #0091ff;
}
.flex2,
.flex6 {
  font-size: 5px;
  width: 30px;
}
.flex4 {
  font-size: 5px;
  width: 65px;
}
.flex3 {
  margin-top: 5px;
  background-color: #65f6ff;
  border: 1px solid #65f6ff;
}
.flex5 {
  margin-top: 5px;
  background-color: #292929;
  border: 1px solid #292929;
}
</style>