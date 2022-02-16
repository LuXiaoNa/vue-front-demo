<template>
  <div id="hello">
    <el-button type="primary" @click="exportTable" icon="el-icon-download"
      >导出多表格数据</el-button
    >
    <el-table
      :data="tableData"
      border
      style="width: 100%; animation: bounceInLeft; animation-duration: 2s"
    >
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
import { json2excel } from "@/utils/setMethods.js";
export default {
  name: "hello",
  data() {
    return {
      tableData: [],
      sheetTableData: [],
    };
  },
  methods: {
    //初始化数据
    initData() {
      getSellData().then((res) => {
        this.tableData = res.data;
        console.log(this.tableData);
        var arr = this.arrayToMap(res.data);
        this.sheetTableData = this.mapToArray(arr);
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
      var result = [];
      var title = "";
      for (let i = 0; i < this.sheetTableData.length; i++) {
        if (this.sheetTableData[i].length > 0) {
          title = this.sheetTableData[i][0].name;
          var tableObj = {
            tHeader: ["序号", "店名", "浏览量", "订单量", "销售额"],
            filterVal: [
              "order",
              "name",
              "visiter",
              "orderQuantity",
              "sellMoney",
            ],
            tableDatas: this.sheetTableData[i],
            sheetName: title,
          };
        }
        result.push(tableObj);
      }
      json2excel(result, "导出多列表", true, "xlsx");
    },
    arrayToMap(data) {
      var map = {};
      for (var i = 0; i < data.length; i++) {
        let name = data[i].name;
        if (name != undefined) {
          if (map[name] == undefined) {
            map[name] = [];
          }
          map[name].push(data[i]);
        }
      }
      return map;
    },
    mapToArray(data) {
      if (data == undefined) {
        return [];
      }
      let array = [];
      for (let p in data) {
        array.push(data[p]);
      }
      return array;
    },
  },
  mounted() {
    this.initData();
  },
};
</script>

