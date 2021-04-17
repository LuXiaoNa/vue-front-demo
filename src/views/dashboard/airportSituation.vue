<template>
  <div id="AirportSituation">
    <el-row>
      <el-col :span="3">
        <el-card class="box-card" style="margin-top:20%;margin-left:13%">
          <div>
            <span>前序延误</span>
          </div>
          <div>
            <span
              style="color:#0091FF;fontSize:24px;padding-left:25%;"
            >{{ this.airportSituationData.preDelayNum}}</span>
          </div>
          <div>
            <span style="color:grey;fontSize:8px;padding-left:25%">架次</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-card class="box-card" style="margin-top:20%;">
          <div>
            <span>离港延误</span>
          </div>
          <div>
            <span
              style="color:#0091FF;fontSize:24px;padding-left:25%"
            >{{ this.airportSituationData.currDelayNum}}</span>
          </div>
          <div>
            <span style="color:grey;fontSize:8px;padding-left:25%">架次</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="box-card" style="margin-top:15%;">
          <div>
            <span style="padding-left:40%">到港</span>
          </div>
          <div>
            <span style="padding-left:10%;padding-right:30%;color:grey">流量</span>
            <span style="padding-right:10%;color:grey">容量</span>
          </div>
          <div>
            <span
              style="padding-left:10%;padding-right:30%;color:#0091FF;fontSize:24px"
            >{{ this.airportSituationData.arrFlow}}</span>
            <span
              style="padding-right:10%;color:#0091FF;fontSize:24px"
            >{{ this.airportSituationData.capacity}}</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="box-card" style="margin-top:15%;">
          <div>
            <span style="padding-left:40%">离港</span>
          </div>
          <div>
            <span style="padding-left:10%;padding-right:30%;color:grey">流量</span>
            <span style="padding-right:10%;color:grey">容量</span>
          </div>
          <div>
            <span
              style="padding-left:10%;padding-right:30%;color:#0091FF;fontSize:24px"
            >{{ this.airportSituationData.depFlow}}</span>
            <span
              style="padding-right:10%;color:#0091FF;fontSize:24px"
            >{{ this.airportSituationData.capacity}}</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-card class="box-card" style="margin-top:13%;">
          <div>
            <span style="padding-left:40%;">机位</span>
          </div>
          <div>
            <span style="padding-left:10%;padding-right:30%;color:grey">近机位</span>
            <span style="padding-right:10%;color:grey">远机位</span>
          </div>
          <div>
            <span
              style="padding-left:7%;color:#0091FF;fontSize:24px"
            >{{ this.airportSituationData.usedNearSeat}}/</span>
            <span style="color:#0091FF;fontSize:20px;">{{ this.airportSituationData.nearSeat}}</span>
            <span
              style="padding-left:21%;color:#0091FF;fontSize:24px"
            >{{ this.airportSituationData.usedRemoteSeat}}/</span>
            <span style="color:#0091FF;fontSize:20px;">{{ this.airportSituationData.remoteSeat}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import {
//   airportSituationData,
 //seatControl
// } from "@/api/dashboard/dashboard.js";
export default {
  name: "AirportSituation",
  data() {
    return {
      airportSituationData: {}
    };
  },
  methods: {
    //机场综合情况
    situation() {
      this.airportSituationData = {
        preDelayNum: "20",
        currDelayNum: "17",
        arrFlow: "31",
        depFlow: "40",
        capacity: "100",
        nearSeat: "20",
        usedNearSeat: "40",
        remoteSeat: "52",
        usedRemoteSeat: "20"
      };
      //   airportSituationData().then(res => {
      //     console.log(res.data);
      //     this.airportSituationData = res.data;
      //   });
    }
  },
  mounted() {
    this.situation();
  }
};
</script>