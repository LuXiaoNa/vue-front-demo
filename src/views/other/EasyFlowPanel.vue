<template>
  <div
    v-if="easyFlowVisible"
    id="efContainer"
    style="backgroundColor:rgb(54, 57, 58);display: flex;height:100vh;"
    ref="efContainer"
  >
    <template v-for="node in easyFlowData.nodeList">
      <flow-node :id="node.nodeId" :key="node.nodeId" :node="node" noTimeFlag="true"></flow-node>
    </template>
  </div>
</template>

<script>
import "@/components/ef/jsplumb";
import { easyFlowMixin } from "@/components/ef/mixins";
import flowNode from "@/components/ef/EasyNode";
import lodash from "lodash";
import { getDataF } from "@/components/ef/data_F";
import { queryEasyFlow } from "@/api/ef/ef.js";
export default {
  data() {
    return {
      // jsPlumb 实例
      jsPlumb: null,
      // 控制画布销毁
      easyFlowVisible: true,
      // 是否加载完毕标志位
      loadEasyFlowFinish: false,
      // 数据
      easyFlowData: {},
      allNodeData: [],
      nodeFlowData: [],
      Id: "",
    };
  },
  // 一些基础配置移动该文件中
  mixins: [easyFlowMixin],
  components: {
    flowNode
  },
  mounted() {
    this.jsPlumb = jsPlumb.getInstance();
    window.addEventListener(
      "message",
      event => {
        console.log(event);
        if (event.data && event.data.type == "preview") {
          this.Id = event.data.data.Id;
          this.initData();
        } else {
          this.Id = "";
          this.initData();
        }
      },
      false
    );
  },
  methods: {
    initData() {
      queryEasyFlow().then(
        res => {
          if (res.data != null) {
            this.allNodeData = Object.assign([], res.data);
          } else {
            this.allNodeData = [];
          }
          //流程图
          this.$nextTick(() => {
            this.jsPlumb = jsPlumb.getInstance();
            //在这里可以根据具体的业务返回符合流程数据格式的数据即可
            this.nodeFlowData = Object.assign({}, getDataF());
            for (let i = 0; i < this.nodeFlowData.nodeList.length; i++) {
              this.nodeFlowData.nodeList[i].background = "#505151";
              this.nodeFlowData.nodeList[i].color = "#a4a4a4";
              this.nodeFlowData.nodeList[i].border = "#7c7e80";
              this.nodeFlowData.nodeList[i].astartTime = null;
              this.nodeFlowData.nodeList[i].estartTime = null;
              this.nodeFlowData.nodeList[i].dataSource = null;
              this.nodeFlowData.nodeList[i].planId = null;
            }
            this.dataReload();
          });
        }
      );
    },
    jsPlumbInit() {
      this.jsPlumb.ready(() => {
        // 导入默认配置
        this.jsPlumb.importDefaults(this.jsplumbSetting);
        // 会使整个jsPlumb立即重绘。
        this.jsPlumb.setSuspendDrawing(false, true);
        // 初始化节点
        this.loadEasyFlow();
        // 连线
        this.jsPlumb.bind("connection", evt => {
          let from = evt.source.id;
          let to = evt.target.id;
          if (this.loadEasyFlowFinish) {
            this.easyFlowData.lineList.push({ from: from, to: to });
          }
        });
        this.jsPlumb.setContainer(this.$refs.efContainer);
      });
    },
    // 加载流程图
    loadEasyFlow() {
      // 初始化连线
      for (var j = 0; j < this.easyFlowData.lineList.length; j++) {
        let line = this.easyFlowData.lineList[j];
        var connParam = {
          source: line.from,
          target: line.to,
          label: line.label ? line.label : "",
          connector: line.connector ? line.connector : "",
          anchors: line.anchors ? line.anchors : undefined,
          paintStyle: line.paintStyle ? line.paintStyle : undefined
        };
        this.jsPlumb.connect(connParam, this.jsplumbConnectOptions);
      }
      this.$nextTick(function() {
        this.loadEasyFlowFinish = true;
      });
    },
    dataReload() {
      for (let i = 0; i < this.allNodeData.length; i++) {
        for (let j = 0; j < this.nodeFlowData.nodeList.length; j++) {
          if (
            this.allNodeData[i].nodeId == this.nodeFlowData.nodeList[j].nodeId
          ) {
            this.nodeFlowData.nodeList[j].astartTime = this.allNodeData[
              i
            ].astartTime;
            this.nodeFlowData.nodeList[j].estartTime = this.allNodeData[
              i
            ].estartTime;
            this.nodeFlowData.nodeList[j].background = this.checkColor(
              this.allNodeData[i]
            ).background;
            this.nodeFlowData.nodeList[j].color = this.checkColor(
              this.allNodeData[i]
            ).color;
            this.nodeFlowData.nodeList[j].border = this.checkColor(
              this.allNodeData[i]
            ).border;
            this.nodeFlowData.nodeList[j].planId = this.allNodeData[i].planId;
            this.nodeFlowData.nodeList[j].dataSource = this.allNodeData[
              i
            ].dataSource;
          }
        }
      }
      this.easyFlowVisible = false;
      this.easyFlowData.nodeList = [];
      this.easyFlowData.lineList = [];
      this.$nextTick(() => {
        var dataList = lodash.cloneDeep(this.nodeFlowData);
        this.easyFlowVisible = true;
        this.easyFlowData = dataList;
        this.$nextTick(() => {
          this.jsPlumb = jsPlumb.getInstance();
          this.$nextTick(() => {
            this.jsPlumbInit();
          });
        });
      });
    },
    //流程图节点背景颜色
    checkColor(item) {
      var obj = {};
      //计划
      if (
        (item.astartTime == undefined &&
          new Date(item.estartTime).getTime() > new Date().getTime()) ||
        item.estartTime == null
      ) {
        obj = {
          color: "#fff",
          background: "#36393a",
          border: "#929596"
        };
        return obj;
      }
      //超时未开始
      if (
        item.astartTime == undefined &&
        new Date(item.estartTime).getTime() < new Date().getTime() &&
        item.estartTime != null
      ) {
        obj = {
          color: "#ff7676",
          background: "#533535",
          border: "#ff7676"
        };
        return obj;
      }
      //正常
      if (
        item.astartTime != "" &&
        new Date(item.astartTime).getTime() <=
          new Date(item.estartTime).getTime() &&
        item.estartTime != null
      ) {
        obj = {
          color: "#5bc4f8",
          background: "#29424b",
          border: "#5bc4f8"
        };
        return obj;
      }
      //超时
      if (
        item.astartTime != "" &&
        new Date(item.astartTime).getTime() >
          new Date(item.estartTime).getTime() &&
        item.estartTime != null
      ) {
        obj = {
          color: "#ffdc64",
          background: "#524a2f",
          border: "#ffdc64"
        };
        return obj;
      }
    }
  }
};
</script>
