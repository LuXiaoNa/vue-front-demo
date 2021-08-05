<template>
  <div class="duty">
    <span>
      <i class="el-icon-d-arrow-right"></i>值班信息
    </span>
    <div v-for="item in dutyData" :key="item.id" style="margin-left:20px;">
      <div style="color:#0091FF;margin-bottom:10px;">{{item.type}}</div>
      <div style="width:96%;border-bottom:1px solid #696969;margin-bottom:16px">
        <span>
          <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
        </span>
        <span style="margin-left:10px;">{{item.name}}</span>
        <span style="margin-left:25%">{{item.tel}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:["dutyData"],
};
</script>
<style>
.el-avatar--small {
  width: 22px;
  height: 22px;
}
.el-avatar--icon {
  font-size: 15px;
}
.el-avatar {
  background: #47575d;
}
</style>