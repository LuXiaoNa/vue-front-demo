<template>
  <div id="hello">
    <el-button type="primary" @click="exportTable" icon="el-icon-download"
      >导出数据</el-button
    >
    <el-table :data="tableData" border style="width: 100%;animation: bounceInLeft;animation-duration: 2s;">
      <el-table-column prop="order" label="序号" width="150"> </el-table-column>
      <el-table-column prop="name" label="店名"> </el-table-column>
      <el-table-column prop="visiter" label="浏览量"> </el-table-column>
      <el-table-column prop="orderQuantity" label="订单量"> </el-table-column>
      <el-table-column prop="sellMoney" label="销售额"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="editData(scope.row)" type="text">编辑</el-button>
          <el-button type="text" @click="deleteData(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getSellData } from "@/api/table/tableBase.js";
import { export_json_to_excel } from "@/excel/Export2Excel"; //导入方法，注意位置
export default {
  name: "hello",
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    //初始化数据
    initData() {
      getSellData().then((res) => {
        this.tableData = res.data;
        console.log(this.tableData);
      });
    },
    //编辑数据
    editData(row) {
      console.log(row);
      this.$message({
        type: "warning",
        message: "哈哈，编辑不了",
      });
    },
    //删除数据
    deleteData(row) {
      console.log(row);
      this.$message({
        type: "warning",
        message: "哈哈，删不了",
      });
    },
    //导出数据
    exportTable() {
      require.ensure([], () => {
        const tHeader = ["序号", "店名", "浏览量","订单量","销售额"];
        const filterVal = ["order", "name", "visiter","orderQuantity","sellMoney"];
        const list = this.tableData;
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, "列表excel");
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
},
  },
  mounted() {
    this.initData();
  },
};
</script>

