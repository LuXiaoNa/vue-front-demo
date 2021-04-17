<template>
  <div class="hello">
    <span>今日情况</span>
    <div style="padding-top: 30px; padding-left: 10px; padding-right: 10px">
      <span>购买</span><span>/浏览数</span>
      <el-progress :stroke-width="15" :percentage="perc"></el-progress>
      <span>{{ this.situationData.buy }}/</span>
      <span style="fontsize: 8px; color: grey">{{
        this.situationData.browse
      }}</span>
    </div>
    <div>
      <span style="padding-left: 15%; padding-right: 15%">订单</span>
      <span>发货</span>
      <span style="padding-left: 15%; padding-right: 15%">销售额</span>
    </div>
    <div>
      <span style="padding-left: 13%">{{ this.situationData.order }}</span>
      <span style="padding-left: 21%; fontsize: 8px; color: grey">{{
        this.situationData.ship
      }}</span>
      <span style="padding-left: 17%; padding-right: 15%">{{
        this.situationData.sales
      }}</span>
    </div>
    <div style="padding-bottom: 10px">
      <span
        style="
          padding-left: 15%;
          padding-right: 15%;
          fontsize: 8px;
          color: grey;
        "
        >件</span
      >
      <span style="padding-left: 6%; fontsize: 8px; color: grey">件</span>
      <span
        style="
          padding-left: 20%;
          padding-right: 15%;
          fontsize: 8px;
          color: grey;
        "
        >元</span
      >
    </div>
  </div>
</template>
<script>
import { getSituationData } from "@/api/dashboard/monitor";
export default {
  data() {
    return {
      situationData: {},
      perc: "",
    };
  },
  methods: {
    initData() {
      getSituationData().then((res) => {
        this.situationData = res.data;
        this.perc = (this.situationData.buy / this.situationData.browse) * 100;
      });
    },
  },
  mounted() {
    this.initData();
  },
};
</script>