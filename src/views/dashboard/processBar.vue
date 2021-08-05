<template>
  <div id="ProcessBar">
    <div>
      <div>
        <span
          style="fontSize:16px; margin-left:3%;margin-right:2%"
          v-if="seatType!=null"
        >{{seatType}}类</span>
        <span style="fontSize:12px;margin-right:53%;">共{{seatNum}}个</span>
        <span style="color:#0091ff">{{preData}}</span>
      </div>
      <div class="pB_Container">
        <div class="first" :style="used"></div>
        <div class="second" :style="notUse"></div>
      </div>
      <div>
        <span style="margin-left:5%;fontSize:14px;color:#0091ff">{{usedNum}}/</span>
        <span style="fontSize:14px;color:#65f6ff">{{notUseNum}}/</span>
        <span style="fontSize:14px;color:grey">{{freeNum}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProcessBar",
  props: {
    seatType: { type: String },
    seatNum: { type: Number },
    usedNum: {
      type: Number
    },
    notUseNum: { type: Number },
    freeNum: { type: Number }
  },
  computed: {
    preData() {
      if (this.freeNum != null && this.seatNum != null) {
        var pre = Math.round((this.freeNum / this.seatNum) * 100);
        return pre + "%";
      } else {
        return "";
      }
    },
  },
  data() {
    return {
      used: {
        width: this.usedNum + "%"
      },
      notUse: {
        width: this.notUseNum + "%"
      }
    };
  },
  components: {},
  methods: {}
};
</script>
<style scoped>
.pB_Container {
  width: 90%;
  background-color: #292929;
  height: 10px;
  display: inline-flex;
  line-height: 10px;
  text-align: right;
  overflow: hidden;
  color: black;
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);
  margin-left: 5%;
  border-radius: 5px;
}
.pB_Container div {
  float: left;
}
.first {
  background-color: #0091ff;
}
.second {
  background-color: #65f6ff;
}
</style>