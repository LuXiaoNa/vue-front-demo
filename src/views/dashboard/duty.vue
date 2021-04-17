<template>
  <div class="duty">
    <div v-for="item in Data" :key="item.id" style="margin-left:20px;">
      <div style="color:#0091FF;margin-bottom:10px;">{{item.type}}</div>
      <div>
        <span><el-avatar icon="el-icon-user-solid" size="small"></el-avatar></span>
        <span style="margin-left:10px;">{{item.name}}</span>
        <span style="margin-left:18%">{{item.tel}}</span>
      </div>
      <div style="width:280px;border-bottom:1px solid #696969;margin-bottom:20px"></div>
    </div>
  </div>
</template>
<script>
// import { dutyData } from "@/api/dashboard/dashboard.js";
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
          type: "今日值班组长",
          name: "戴倩云",
          tel: "152121176633",
          id: "242476454532"
        },
        {
          type: "AOC值班组长",
          name: "朱丽茂",
          tel: "132121176633",
          id: "24247645435"
        },
        {
          type: "TOC值班组长",
          name: "谢华宇",
          tel: "142121176633",
          id: "242476454235"
        },
        {
          type: "TOC值班组长",
          name: "张雨涵",
          tel: "162121176633",
          id: "2424764545122"
        },
        {
          type: "TOC值班组长",
          name: "谢华宇",
          tel: "142121176633",
          id: "2424764542355"
        },
        {
          type: "TOC值班组长",
          name: "张雨涵",
          tel: "162121176633",
          id: "242476454512"
        }
      ];
    //   dutyData().then(res=>{
    //       console.log(res.data)
    //   })
    }
  },
  mounted() {
    this.initData();
  }
};
</script>