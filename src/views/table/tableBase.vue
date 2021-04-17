<template>
  <div id="hello">
    <!-- <el-button type="primary" icon="el-icon-plus" @click="addTask" size="small"
      >添加</el-button
    > -->
    <el-table :data="tableData" border style="width: 100%">
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

    <formDialog
      v-if="dialogVisible"
      :modalObj="modalObj"
      :visible.sync="dialogVisible"
      :formData="formData"
      ref="editForm"
    ></formDialog>
  </div>
</template>
<script>
import formDialog from "@/views/table/dialog.vue";
import { getSellData } from "@/api/table/tableBase.js";
export default {
  name: "hello",
  components: {
    formDialog,
  },
  data() {
    return {
      tableData: [],
      dialogVisible: false, //弹出框唯一标识
      formData: {},
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
      let _this = this;
      _this.formData = row
      _this.dialogVisible = true; //指定弹出框显示
      _this.modalObj = { dialogTitle: "编辑", width: "700px", id: "" }; //编辑时，id不为空；添加时，id为空。弹窗需要嵌套时，modal: false；不需要则为true。
    },
    //删除数据
    deleteData(row) {
      console.log(row);
      this.$message({
        type: "warning",
        message: "哈哈，删不了",
      });
    },
  },
  mounted() {
    this.initData();
  },
};
</script>