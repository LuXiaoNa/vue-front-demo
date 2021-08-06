<template>
  <div class="hello">
    <span><i class="el-icon-d-arrow-right"></i>今日情况</span>
    <div style="padding-top: 20px; padding-left: 10px; padding-right: 10px">
      <span>购买</span><span>/浏览数</span>
      <el-progress :stroke-width="15" :percentage="perc"></el-progress>
      <span>{{ flightData.buy }}/</span>
      <span style="fontsize: 8px; color: grey">{{
        flightData.browse
      }}</span>
    </div>
    <el-row style="margin:10px 0px">
      <el-col :span="5" :offset="2">
        <span>订单</span>
        <span>{{ flightData.order }}</span>
        <span style="margin-left:15px;color:grey"> 件</span>
      </el-col>
          <el-col :span="5" :offset="2">
        <span>发货</span>
        <span>{{
       flightData.ship
      }}</span>
        <span style="margin-left:12px;color:grey">件</span>
      </el-col>
       <el-col :span="6" :offset="2">
        <span>销售额</span>
        <span>{{
        flightData.sales
      }}</span>
        <span style="margin-left:12px;color:grey">元</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>

export default {
  props: ["flightData","perc"],
};
</script>