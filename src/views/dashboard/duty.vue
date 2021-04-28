<template>
  <div class="duty">
    <span><i class="el-icon-d-arrow-right"></i>值班信息</span>
    <div v-for="item in Data" :key="item.id" style="margin-left: 20px">
      <div style="color: #0091ff; margin-bottom: 10px">{{ item.type }}</div>
      <div>
        <span
          ><el-avatar icon="el-icon-user-solid" size="small"></el-avatar
        ></span>
        <span style="margin-left: 10px">{{ item.name }}</span>
        <span style="margin-left: 18%">{{ item.tel }}</span>
      </div>
      <div
        style="
          width: 280px;
          border-bottom: 1px solid #696969;
          margin-bottom: 20px;
        "
      ></div>
    </div>
  </div>
</template>
<script>
import { dutyData } from "@/api/dashboard/monitor.js";
export default {
  data() {
    return {
      Data: [],
    };
  },
  methods: {
    initData() {
      dutyData().then((res) => {
        console.log(res.data);
        this.Data = res.data;
      });
    },
  },
  mounted() {
    this.initData();
  },
};
</script>