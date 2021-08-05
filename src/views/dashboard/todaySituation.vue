<template>
  <div class="hello">
    <span> <i class="el-icon-d-arrow-right"></i>今日情况</span>
    <div style="padding-top: 30px; padding-left: 10px; padding-right: 10px">
      <span>购买</span><span>/浏览数</span>
      <el-progress :stroke-width="15" :percentage="perc"></el-progress>
      <span>{{ flightData.buy }}/</span>
      <span style="fontsize: 8px; color: grey">{{ flightData.browse }}</span>
    </div>
  </div>
</template>
<script>

export default {
  props: ["flightData","perc"],
};
</script>