<template>
  <div class="specialPlane">
    <span>
      <i class="el-icon-d-arrow-right"></i>专机要客
    </span>
    <vue-seamless-scroll :data="VipGuestData" :class-option="classOption" class="scollStyle">
      <div style="fontSize:10px" v-for="item in VipGuestData" :key="item.id">
        <div class="lineStyle">
        <el-row style="margin-bottom:10px" :gutter="5">
          <el-col :span="6">
            <div style="margin-left:5px;">{{item.flightNumData}}</div>
            <div class="vipStyle">VIP贵宾</div>
          </el-col>
          <el-col :span="4">
            <div style="fontSize:4px;color:#52B137">{{item.status}}</div>
          </el-col>
          <el-col :span="3" :offset="2">
            <div class="titleStyle">机位</div>
            <div style="color:#0091FF;fontSize:10px">{{item.seat}}</div>
          </el-col>
          <el-col :span="6">
            <div class="titleStyle">航线</div>
            <div>{{item.route}}</div>
          </el-col>
          <el-col :span="3">
            <div class="titleStyle">机型</div>
            <div>{{item.typeCode}}</div>
          </el-col>
        </el-row>
        <el-row style="margin-bottom:10px" :gutter="5">
          <el-col :span="5" :offset="1">
            <div class="titleStyle">到港航班</div>
            <div>{{item.arrFlightNum}}</div>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="titleStyle">计划时间</div>
            <div style="text-align:center">{{item.planArrTime}}</div>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="titleStyle">预计时间</div>
            <div style="text-align:center">{{item.expectArrTime}}</div>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="titleStyle">实际时间</div>
            <div style="text-align:center">{{item.realArrTime}}</div>
          </el-col>
        </el-row>
        <el-row style="margin-bottom:10px">
          <el-col :span="5" :offset="1">
            <div class="titleStyle">离港航班</div>
            <div>{{item.flightNum}}</div>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="titleStyle">计划时间</div>
            <div style="text-align:center">{{item.planDepTime}}</div>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="titleStyle">预计时间</div>
            <div style="text-align:center">{{item.expectDepTime}}</div>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="titleStyle">实际时间</div>
            <div style="text-align:center">{{item.realDepTime}}</div>
          </el-col>
        </el-row>
        </div>
      </div>
    </vue-seamless-scroll>
  </div>
</template>
<script>
import vueSeamlessScroll from "./scroll";
export default {
  name: "specialPlane",
  props: ["VipGuestData"],
  components: {
    vueSeamlessScroll
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
  }
};
</script>
<style scoped>
.scollStyle {
  height: calc(100vh - 17vh - 425px - 60px - 45px);
  overflow-y:auto;
  margin:10px auto;
}
.vipStyle {
  width: 56px;
  height: 20px;
  line-height: 20px;
  margin-left:5px;
  text-align: center;
  border-radius: 15px;
  background: #0091ff;
  font-size: 8px;
  color: #000000;
}
.titleStyle {
  color: grey;
  font-size: 10px;
}
.lineStyle {
  width: 290px;
  border-bottom: 1px solid #696969;
  margin:10px auto;
}
</style>