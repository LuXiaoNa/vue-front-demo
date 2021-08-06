<template>
  <div>
  <el-row :gutter="22">
        <div style="margin-right:10px">
          <lique
            v-for="item in liqueData"
            :key="item.id"
            :Data="item"
          ></lique>
        </div>
    </el-row>
  </div>
</template>

<script>
import lique from "@/views/dashboard/lique";
import { getLiqueData } from "@/api/dashboard/specialEcharts";
export default {
  components: { lique },
  data() {
    return {
      liqueData: [],
    };
  },
  methods: {
    liqueInitData() {
      getLiqueData().then((res) => {
        this.liqueData = res.data;
      });
    },
  },
  mounted() {
    this.liqueInitData();
  },
};
</script>