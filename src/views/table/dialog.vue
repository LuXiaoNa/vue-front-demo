<template>
  <el-dialog
    :visible.sync="visible"
    :title="modalObj.dialogTitle"
    :width="modalObj.width"
    :before-close="modalClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form
      :inline="true"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="店名" prop="name">
        <el-input
          v-model="ruleForm.name"
          placeholder="请输入店名"
        ></el-input>
      </el-form-item>
        <el-form-item label="浏览量" prop="visiter">
        <el-input
          v-model="ruleForm.visiter"
          placeholder="请输入浏览量"
        ></el-input>
      </el-form-item>
        <el-form-item label="订单量" prop="orderQuantity">
        <el-input
          v-model="ruleForm.orderQuantity"
          placeholder="请输入订单量"
        ></el-input>
      </el-form-item>
        <el-form-item label="销售额" prop="sellMoney">
        <el-input
          v-model="ruleForm.sellMoney"
          placeholder="请输入销售额"
        ></el-input>
      </el-form-item>
      <!--弹出层按钮居中-->
      <div style="text-align: center">
        <el-button @click="modalClose" size="small">取消</el-button>
        <el-button
          type="primary"
          @click="submitForm"
          size="small"
          >保存</el-button
        >
      </div>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  name: "formDialog",
  data() {
    // 验证
    let validateTaskName = (rule, value, callback) => {
      let _this = this;
      var pattern = /^.{1,12}$/;
      if (!pattern.test(value)) {
        callback(new Error("任务名称长度在2到12个字符！"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: { },
      rules: {
        name: [
          { required: true, message: "请输入店名!", trigger: "blur" },
          { validator: validateTaskName, trigger: "change" },
        ],
      },
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    modalObj: {
      type: Object,
      required: false,
    },
    formData:{
      type: Object,
      required: false,
    },
  },
  mounted() {
    //表单初始
    this.ruleForm = this.formData
  },
  methods: {
    // 信息提交
    submitForm() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          //判断modalObj中id是否为空，决定是编辑还是添加请求操作；
          this.modalClose();
        } else {
          //验证失败处理
          return false;
        }
      });
    },
    // 关闭弹出框
    modalClose() {
      this.$emit("update:visible", false); // 直接修改父组件的属性
    },
  },
};
</script>
