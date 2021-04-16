<template>
  <div style="width: 800px">
    <el-table :data="tableData" border row-key="id" align="left">
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
import Sortable from "sortablejs";
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
  mounted() {
    this.initData();
    this.rowDrop();
    this.columnDrop();
  },
  methods: {
    initData() {
      getSellData().then((res) => {
        this.tableData = res.data;
      });
    },
    //行拖拽
    rowDrop() {
      const tbody = document.querySelector(".el-table__body-wrapper tbody");
      const _this = this;
      Sortable.create(tbody, {
          dragClass: "sortable-drag",  // 正在被拖拽中的css类名
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
          _this.tableData.splice(newIndex, 0, currRow);
        },
      });
    },
    //列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector(".el-table__header-wrapper tr");
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
          const oldItem = this.col[evt.oldIndex];
          this.col.splice(evt.oldIndex, 1);
          this.col.splice(evt.newIndex, 0, oldItem);
        },
      });
    },
  },
};
</script>
<style>
.sortable-drag{
  color:red;
}
</style>