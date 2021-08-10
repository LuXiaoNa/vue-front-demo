<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      @select="selectChange"
      height="95vh"
      @select-all="selectAll"
      stripe
    >
      <el-table-column
        type="selection"
        width="55"
        align="center"
      ></el-table-column>
      <el-table-column
        v-for="(item, index) in col"
        :key="`col_${index}`"
        :prop="col[index].prop"
        :label="item.label"
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getSellData } from "@/api/table/tableBase.js";
export default {
  data() {
    return {
      col: [
        {
          label: "店名",
          prop: "name",
        },
        {
          label: "浏览量",
          prop: "visiter",
        },
        {
          label: "订单量",
          prop: "orderQuantity",
        },
        {
          label: "销售额",
          prop: "sellMoney",
        },
      ],
      tableData: [],
    };
  },
  methods: {
    initData() {
      getSellData().then((res) => {
        this.tableData = res.data;
        this.$nextTick(() => {
          //清空选项
          this.$refs.multipleTable.clearSelection();
          for (let i = 0; i < this.tableData.length; i++) {
            // if (this.tableData[i].check == true) {
              //回显打勾
              this.$refs.multipleTable.toggleRowSelection(
                this.tableData[i],
                this.tableData[i].check
              );
            // }
          }
        });
      });
    },
    selectChange(selection, row) {
      console.log(selection);
      console.log(row);
    },
    selectAll(selection) {
      console.log(selection);
    },
  },
  mounted() {
    this.initData();
  },
};
</script>