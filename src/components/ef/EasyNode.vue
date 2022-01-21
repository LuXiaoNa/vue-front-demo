<template>
  <div
    ref="node"
    :style="nodeContainerStyle"
    :class="
      node.nodeId != '09e81d69049e4ce4a42afad77145ff29'
        ? 'node-container'
        : 'node-container2'
    "
  >
    <!-- 节点名称 -->
    <div class="node-text" :show-overflow-tooltip="true">
      <span style="fontsize: 15px" :style="getColor">{{ node.nodeName }}</span>
    </div>
    <el-row style="margin-top: -5px">
      <el-col :span="1" :offset="2">
        <span style="fontsize: 14px; color: #a4a4a4">实</span>
      </el-col>
      <!-- 无节点数据时 -->
      <el-col :span="17" :offset="2">
        <div style="text-align: center" v-if="noTimeFlag">
          <span style="fontsize: 14px"
            >{{ node.astartTime | dataTimeFormat }}{{ outTime }}</span
          >
        </div>
        <div style="text-align: center" v-else>
          <span v-if="node.planId == null" style="color: gery">--</span>
          <span
            style="cursor: pointer; fontsize: 14px"
            v-show="
              node.nodeName != '数据一' &&
              node.planId != null &&
              node.astartTime != null
            "
            @click="reportFlag == '1' ? clickNode(node) : ''"
            >{{ node.astartTime | dataTimeFormat }}{{ outTime }}</span
          >
          <i
            v-show="
              node.nodeName != '数据一' &&
              node.planId != null &&
              node.astartTime == null
            "
            @click="
              node.planId != null && reportFlag == '1' ? clickNode(node) : ''
            "
            :style="reportFlag == '1' ? 'color:#fff' : 'color:grey;'"
            style="cursor: pointer; fontsize: 14px"
            class="el-icon-edit-outline"
          ></i>
          <span
            style="cursor: pointer; fontsize: 14px"
            v-show="node.nodeName == '数据一' && node.planId != null"
            >{{ node.astartTime | dataTimeFormat }}{{ outTime }}</span
          >
        </div>
      </el-col>
      <!-- 加减一天 -->
      <el-col :span="2">
        <div class="addStyle">{{ node.astartTime | checkTime }}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1" :offset="2">
        <div style="fontsize: 14px; color: #a4a4a4">预</div>
      </el-col>
      <el-col :span="14" :offset="3">
        <div style="color: gery; text-align: center" v-if="node.planId == null">
          --
        </div>
        <div v-else style="fontsize: 14px; text-align: center">
          {{ node.estartTime | dataTimeFormat }}
        </div>
      </el-col>
      <!-- 加减一天 -->
      <el-col :span="1">
        <div class="preAddStyle">{{ node.estartTime | checkTime }}</div>
      </el-col>
      <el-col :span="3">
        <!-- 有节点数据时 -->
        <span v-if="node.planId != null">
          <img
            v-show="node.dataSource == 'PC'"
            class="imgStyle"
            title="人工上报"
            src="@/assets/watch/客服.svg"
          />
          <img
            v-show="node.dataSource == 'APP'"
            class="imgStyle"
            title="移动端上报"
            src="@/assets/watch/app.svg"
          />
          <img
            v-show="node.dataSource == 'CAR'"
            class="imgStyle"
            title="车辆系统上报"
            src="@/assets/watch/车辆.svg"
          />
          <img
            v-show="node.dataSource == 'VIDEO'"
            class="imgStyle"
            title="视频系统上报"
            src="@/assets/watch/视频.svg"
          />
          <img
            v-show="node.dataSource == 'LDVOAS'"
            class="imgStyle"
            title="视频系统上报"
            src="@/assets/watch/视频.svg"
          />
        </span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { date2Str } from "@/utils/common.js";
export default {
  props: ["node", "reportFlag", "noTimeFlag"],
  data() {
    return {
      dialogFormVisible: false,
      timeEdit: "",
      actTime: "",
    };
  },
  filters: {
    dataTimeFormat(val) {
      if (val != null) {
        var time = date2Str(val, "HH:mm");
        return time;
      }
      return "--";
    },
    checkTime(val) {
      let valYMD = date2Str(val, "YYYY-MM-DD");
      let today = new Date();
      let planTimeYMD = date2Str(today, "YYYY-MM-DD");
      let valYMDDate = new Date(valYMD).getTime();
      let planTimeYMDDate = new Date(planTimeYMD).getTime();
      if (valYMDDate > planTimeYMDDate) {
        return "+1";
      } else if (valYMDDate < planTimeYMDDate) {
        return "-1";
      }
      return "";
    },
  },
  computed: {
    outTime() {
      if (this.node.astartTime != null && this.node.estartTime != null) {
        var atime = new Date(
          date2Str(this.node.astartTime, "YYYY-MM-DD HH:mm")
        ).getTime();
        var etime = new Date(
          date2Str(this.node.estartTime, "YYYY-MM-DD HH:mm")
        ).getTime();
        var out = atime - etime;
        var time = Math.round(out / 60 / 1000);
        if (time > 999) {
          time = ">" + "999";
          return "(" + time + ")";
        } else if (time < -999) {
          time = "<" + "-999";
          return "(" + time + ")";
        } else if (time == 0) {
          return "";
        } else {
          return "(" + time + ")";
        }
      }
      return "";
    },
    // 节点容器样式
    nodeContainerStyle() {
      var obj = {
        top: this.node.top,
        left: this.node.left,
        background: this.node.background,
        border: "2px dashed",
        borderColor: this.node.border,
      };
      if (
        this.node.nodeId == "9d923261ae2c41febba09ed9f1ef0df8" ||
        this.node.nodeId == "d79979bde7fb4750b6dc518331760802"
      ) {
        obj.border = "2px dashed";
        return obj;
      }
      obj.border = "1px solid";
      return obj;
    },
    // 字体颜色
    getColor() {
      return {
        color: this.node.color,
      };
    },
  },
  methods: {
    // 点击节点
    clickNode(node) {
      this.$emit("clickNode", node);
    },
  },
};
</script>