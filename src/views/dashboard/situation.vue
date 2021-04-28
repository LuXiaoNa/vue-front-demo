<template>
  <div id="situation">
    <el-row>
      <el-col :span="5">
        <el-card class="box-card" style="margin-top: 10%; margin-left: 13%">
          <div>
            <span style="margin-left: 10px">访客量</span>
          </div>
          <div>
            <span style="color: #0091ff; fontsize: 24px; padding-left: 25%">{{
              Data.visiter
            }}</span>
          </div>
          <div>
            <span style="color: grey; fontsize: 6px; padding-left: 25%"
              >人</span
            >
          </div>
        </el-card>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-card class="box-card" style="margin-top: 10%">
          <div>
            <span style="margin-left: 15px">购买量</span>
          </div>
          <div>
            <span style="color: #0091ff; fontsize: 24px; padding-left: 25%">{{
              Data.purchaseNum
            }}</span>
          </div>
          <div>
            <span style="color: grey; fontsize: 8px; padding-left: 30%"
              >单</span
            >
          </div>
        </el-card>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-card class="box-card" style="margin-top: 10%">
          <div>
            <span style="padding-left: 40%">转化</span>
          </div>
          <div>
            <span style="color: grey">购买</span>
            <span style="padding-left: 20%; color: grey">流失</span>
          </div>
          <div>
            <span
              style="
                padding-left: 10%;
                padding-right: 20%;
                color: #0091ff;
                fontsize: 22px;
              "
              >{{ Data.purchase }}</span
            >
            <span style="color: #0091ff; fontsize: 22px">{{
              Data.outflow
            }}</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" :offset="1">
        <el-card class="box-card" style="margin-top: 10%">
          <div>
            <span style="padding-left: 40%">货物</span>
          </div>
          <div>
            <span style="padding-left: 10%; padding-right: 15%; color: grey"
              >发货</span
            >
            <span style="color: grey">进货</span>
          </div>
          <div>
            <span style="color: #0091ff; fontsize: 20px">{{ Data.ship }}/</span>
            <span style="color: #0091ff; fontsize: 16px">{{ Data.last }}</span>
            <span style="color: #0091ff; fontsize: 16px; margin-left: 20%">{{
              Data.buy
            }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { situationData } from "@/api/dashboard/monitor.js";
export default {
  name: "situation",
  data() {
    return {
      Data: {},
    };
  },
  methods: {
    //机场综合情况
    situation() {
      situationData().then((res) => {
        console.log(res.data);
        this.Data = res.data;
      });
    },
  },
  mounted() {
    this.situation();
  },
};
</script>