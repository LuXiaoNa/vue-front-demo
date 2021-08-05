<template>
  <div class="release">
    <span>
      <i class="el-icon-d-arrow-right"></i>当日放行情况
    </span>
    <div style="margin-top:5%;margin-bottom:5%;position:relative;text-align:center">
      <span style="position:absolute;margin-left:10%;margin-top:4%;color:grey;fontSize:15px">始发正常率</span>
      <el-progress
        type="circle"
        :percentage="releaseData.nomalRate"
        style="margin-left:7%;margin-right:8%;"
      ></el-progress>
      <span style="position:absolute;margin-left:3%;margin-top:4%;color:grey;fontSize:15px">放行正常率</span>
      <el-progress type="circle" :percentage="releaseData.releaseRate"></el-progress>
      <span style="position:absolute;margin-left:11%;margin-top:4%;color:grey;fontSize:15px">本月放行正常率</span>
      <el-progress
        type="circle"
        :percentage="releaseData.avgRate"
        style="margin-left:10%;margin-right:10%"
      ></el-progress>
    </div>
  </div>
</template>
<script>
export default {
  props: ["releaseData"],
};
</script>
<style>
.el-progress-circle__track{
  stroke:#65f6ff;
  stroke-width:5.8
}
</style>