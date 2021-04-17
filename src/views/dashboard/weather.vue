<template>
  <div class="weather">
    <el-row>
      <el-col :span="4" :offset="2">
        <div style="fontSize:14px">
          <i class="el-icon-cloudy" v-if="Data[0].sky=='多云'"></i>
          <i class="el-icon-light-rain" v-if="Data[0].sky=='下雨'"></i>
          <i class="el-icon-sunny" v-if="Data[0].sky=='晴天'"></i>
          {{Data[0].sky}}
        </div>
        <div style="fontSize:20px">{{Data[0].temperature}}℃</div>
      </el-col>
      <el-col :span="3" :offset="1">
        <div>{{Data[0].visibility}}</div>
        <div class="fontColor">能见度</div>
      </el-col>
      <el-col :span="3" :offset="1">
        <div>{{Data[0].visibility}}</div>
        <div class="fontColor">云底高</div>
      </el-col>
      <el-col :span="3" :offset="1">
        <div>{{Data[0].visibility}}</div>
        <div class="fontColor">风向</div>
      </el-col>
      <el-col :span="3" :offset="1">
        <div>{{Data[0].visibility}}</div>
        <div class="fontColor">风速</div>
      </el-col>
    </el-row>
      <el-tabs style="margin-top:20px">
        <el-tab-pane v-for="item in Data[0].runwayInfo" :key="item.id" :label="item.runway">
          <el-row  :gutter="22">
            <el-col :span="5" :offset="2">
              <div>RVR</div>
              <div class="fontColor">跑道视程</div>
            </el-col>
            <el-col :span="3" :offset="1">
              <div>{{item.tdz}}</div>
              <div class="fontColor">TDZ</div>
            </el-col>
            <el-col :span="3" :offset="2">
              <div>{{item.mid}}</div>
              <div class="fontColor">TDZ</div>
            </el-col>
            <el-col :span="3" :offset="2">
              <div>{{item.end}}</div>
              <div class="fontColor">END</div>
            </el-col>
          </el-row>
          <el-row :gutter="22" style="margin-top:20px">
            <el-col :span="5" :offset="2">
              <div>{{item.direction}}</div>
              <div class="fontColor">风向</div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div>{{item.speed}}m/s</div>
              <div class="fontColor">风速</div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div>{{item.dewTmp}}℃</div>
              <div class="fontColor">露点</div>
            </el-col>
            <el-col :span="4" :offset="1">
              <div>{{item.tmp}}℃</div>
              <div class="fontColor">温度</div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>

  </div>
</template>
<script>
// import { weatherData } from "@/api/dashboard/dashboard.js";
export default {
  data() {
    return {
      Data: []
    };
  },
  methods: {
    initData() {
      this.Data = [
        {
          area: "淮安",
          sky: "多云",
          temperature: "20",
          visibility: "3000",
          cloudHeight: "210",
          direction: "110",
          speed: "3",
          runwayInfo: [
            {
              runway: "03号跑道",
              tdz: "2000",
              mid: "2000",
              end: "2000",
              direction: "180",
              speed: "5",
              dewTmp: "5",
              tmp: "21"
            },
            {
              runway: "04号跑道",
              tdz: "1000",
              mid: "1000",
              end: "2200",
              direction: "130",
              speed: "3",
              dewTmp: "6",
              tmp: "22"
            },
            {
              runway: "05号跑道",
              tdz: "1300",
              mid: "1200",
              end: "2500",
              direction: "110",
              speed: "5",
              dewTmp: "2",
              tmp: "26"
            }
          ]
        }
      ];
      //   weatherData().then(res => {
      //       if(res.data!=null){
      //           console.log(res.data)
      //       }
      //   });
    }
  },
  mounted() {
    this.initData();
  }
};
</script>
<style>
.fontColor {
  color: grey;
  font-size: 12px;
}
</style>