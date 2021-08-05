<template>
  <div id="AirportSituation">
    <el-row>
      <el-col :span="3" style="margin-left:15px">
        <el-card class="box-card" style="margin-top:20%;height:115px">
          <div class="centerStyle">前序延误</div>
          <div class="dataStyle">{{ airportSituationData.preDelayNum}}</div>
          <div class="jiaciStyle">架次</div>
        </el-card>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-card class="box-card" style="margin-top:20%;height:115px">
          <div class="centerStyle">离港延误</div>
          <div class="dataStyle">{{ airportSituationData.currDelayNum}}</div>
          <div class="jiaciStyle">架次</div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="box-card" style="margin-top:15%;height:115px">
          <div class="centerStyle">到港</div>
          <el-col :span="12">
            <div class="titleStyle">流量</div>
            <div class="countStyle">{{ airportSituationData.arrFlow}}</div>
          </el-col>
          <el-col :span="12">
            <div class="titleStyle">容量</div>
            <div class="countStyle">{{airportSituationData.capacity}}</div>
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-card class="box-card" style="margin-top:15%;height:115px">
          <div class="centerStyle">离港</div>
          <el-col :span="12">
            <div class="titleStyle">流量</div>
            <div class="countStyle">{{ airportSituationData.depFlow}}</div>
          </el-col>
          <el-col :span="12">
            <div class="titleStyle">容量</div>
            <div class="countStyle">{{ airportSituationData.capacity}}</div>
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-card class="box-card" style="margin-top:13%;height:115px">
          <div class="centerStyle">机位</div>
          <el-col :span="12">
            <div class="titleStyle">近机位</div>
            <div   class="countStyle">
              <span style="color:#0091FF;fontSize:24px">{{ airportSituationData.usedNearSeat}}/</span>
              <span style="color:#0091FF;fontSize:20px;">{{ airportSituationData.nearSeat}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="titleStyle">远机位</div>
            <div   class="countStyle">
              <span
                style="color:#0091FF;fontSize:24px"
              >{{ airportSituationData.usedRemoteSeat}}/</span>
              <span style="color:#0091FF;fontSize:20px;">{{ airportSituationData.remoteSeat}}</span>
            </div>
          </el-col>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "AirportSituation",
  props:["airportSituationData"],
};
</script>
<style scoped>
.jiaciStyle {
  text-align: center;
  color: grey;
  font-size: 8px;
   margin-top:5px;
}
.centerStyle {
  text-align: center;
  margin-top:5px;
}
.dataStyle {
  text-align: center;
  color: #0091ff;
  font-size: 24px;
  margin-top:10px;
}
.titleStyle {
  color: grey;
  text-align: center;
  margin-top: 10px;
}
.countStyle {
  color: #0091ff;
  font-size: 24px;
  text-align: center;
  margin-top: 5px;
}
</style>