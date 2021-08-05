<template>
  <div class="weather">
    <el-row>
      <el-col :span="24" style="margin-bottom: 10px">
        <span> <i class="el-icon-d-arrow-right"></i>气象概况 </span>
      </el-col>
      <el-col :span="4" :offset="2">
        <div style="fontsize: 20px">{{ weatherData.temperature }}℃</div>
      </el-col>
      <el-col :span="3" :offset="1">
        <div>{{ weatherData.visibility }}</div>
        <div class="fontColor">能见度</div>
      </el-col>
      <el-col :span="3" :offset="1">
        <div>{{ weatherData.visibility }}</div>
        <div class="fontColor">云底高</div>
      </el-col>
      <el-col :span="3" :offset="1">
        <div>{{ weatherData.visibility }}</div>
        <div class="fontColor">风向</div>
      </el-col>
      <el-col :span="3" :offset="1">
        <div>{{ weatherData.visibility }}</div>
        <div class="fontColor">风速</div>
      </el-col>
    </el-row>
    <el-tabs style="margin-top: 20px">
      <el-tab-pane
        v-for="item in weatherData.runwayInfo"
        :key="item.id"
        :label="item.runway"
      >
        <el-row :gutter="22">
          <el-col :span="5" :offset="2">
            <div>RVR</div>
            <div class="fontColor">视程</div>
          </el-col>
          <el-col :span="3" :offset="1">
            <div>{{ item.tdz }}</div>
            <div class="fontColor">TDZ</div>
          </el-col>
          <el-col :span="3" :offset="2">
            <div>{{ item.mid }}</div>
            <div class="fontColor">TDZ</div>
          </el-col>
          <el-col :span="3" :offset="2">
            <div>{{ item.end }}</div>
            <div class="fontColor">END</div>
          </el-col>
        </el-row>
        <el-row :gutter="22" style="margin-top: 20px">
          <el-col :span="5" :offset="2">
            <div>{{ item.direction }}</div>
            <div class="fontColor">风向</div>
          </el-col>
          <el-col :span="4" :offset="1">
            <div>{{ item.speed }}m/s</div>
            <div class="fontColor">风速</div>
          </el-col>
          <el-col :span="4" :offset="1">
            <div>{{ item.dewTmp }}℃</div>
            <div class="fontColor">露点</div>
          </el-col>
          <el-col :span="4" :offset="1">
            <div>{{ item.tmp }}℃</div>
            <div class="fontColor">温度</div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  props:["weatherData"],
};
</script>
<style>
.fontColor {
  color: grey;
  font-size: 12px;
}
</style>