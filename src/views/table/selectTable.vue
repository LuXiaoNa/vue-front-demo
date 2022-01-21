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
      style="animation: bounceInLeft; animation-duration: 2s"
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
      var arr = [-1, 0, 1, 2, -1, -4];
      this.a(arr);
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
    a(nums) {
      if (nums.length > 2) {
        nums.sort();   //[-4,-1,-1,0,1,2]
        var arrData = [];
        var left=0;
        var right=0;
        for (var i = 1; i < nums.length-1; i++) {
          left=i-1
          right=i+1
          var sum = nums[left] + nums[right];
          if (sum > 0) {
            if (sum + nums[left + 1] == 0) {
              arrData.push([nums[left], nums[left + 1], nums[right]]);
            }
          } else if (sum == 0) {
            if (nums.indexOf(0) != -1) {
              arrData.push([nums[i], nums[i + 1], 0]);
            }
          } else if (sum < 0) {
            if (sum + nums[nums.length - 2] == 0) {
              arrData.push([nums[i], nums[nums.length-1], nums[nums.length - 2]]);
            }
          }
        }
        console.log(arrData)
        return arrData;
      }
      return [];
    },
  },
  mounted() {
    this.initData();
  },
};
</script>