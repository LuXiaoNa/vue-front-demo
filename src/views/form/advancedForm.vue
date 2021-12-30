<template>
  <div id="hello">
    <el-row :gutter="20">
      <el-card shadow="never">
        <div slot="header" class="clearfix">
          <span>仓库管理</span>
        </div>
        <div>
          <el-form
            :model="storeForm"
            ref="storeForm"
            label-width="100px"
            size="mini"
          >
            <el-row>
              <el-col :span="5" :offset="2">
                <el-form-item label="仓库名" prop="storeName">
                  <el-input
                    v-model.trim="storeForm.storeName"
                    autosize
                    size="mini"
                    maxlength="40"
                  ></el-input>
                </el-form-item>
                <el-form-item label="审批员" prop="shenPiYuan">
                  <el-select
                    v-model="storeForm.shenPiYuan"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in spyOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8" :offset="1">
                <el-form-item label="仓库域名" prop="yuName">
                  <el-input placeholder="请输入内容" v-model="storeForm.yuName">
                    <template slot="prepend">Http://</template>
                    <template slot="append">.com</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="生效日期" prop="startData">
                  <el-date-picker
                    v-model="storeForm.startData"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="7" :offset="1">
                <el-form-item label="仓库管理员" prop="manage">
                  <el-select v-model="storeForm.manage" placeholder="请选择">
                    <el-option
                      v-for="item in spyOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="仓库类型" prop="type">
                  <el-select v-model="storeForm.type" placeholder="请选择">
                    <el-option
                      v-for="item in typeOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
    </el-row>
    <el-row :gutter="20" style="margin-top:10px;margin-bottom:10px">
      <el-card shadow="never">
        <div slot="header" class="clearfix">
          <span>任务管理</span>
        </div>
        <div>
          <el-form
            :model="taskForm"
            ref="taskForm"
            label-width="100px"
            size="mini"
          >
            <el-row>
              <el-col :span="5" :offset="2">
                <el-form-item label="任务名" prop="taskName">
                  <el-input
                    v-model.trim="taskForm.taskName"
                    autosize
                    size="mini"
                    maxlength="40"
                  ></el-input>
                </el-form-item>
                <el-form-item label="责任人" prop="responsible">
                  <el-select
                    v-model="taskForm.responsible"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in spyOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8" :offset="1">
                <el-form-item label="任务描述" prop="taskDesc">
                  <el-input
                    v-model.trim="taskForm.taskDesc"
                    type="textarea"
                    autosize
                    size="mini"
                    maxlength="40"
                  ></el-input>
                </el-form-item>
                <el-form-item label="生效时间" prop="startData">
                  <el-time-picker
                    is-range
                    v-model="taskForm.startData"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围"
                  >
                  </el-time-picker>
                </el-form-item>
              </el-col>
              <el-col :span="7" :offset="1">
                <el-form-item label="执行人" prop="manage">
                  <el-select v-model="taskForm.manage" placeholder="请选择">
                    <el-option
                      v-for="item in spyOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="任务类型" prop="taskType">
                  <el-select v-model="taskForm.taskType" placeholder="请选择">
                    <el-option
                      v-for="item in typeOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
    </el-row>
    <el-row :gutter="20">
      <el-card shadow="never">
        <div slot="header" class="clearfix">
          <span>成员管理</span>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="成员姓名"> </el-table-column>
          <el-table-column prop="number" label="工号"> </el-table-column>
          <el-table-column prop="department" label="所属部门">
              <template slot-scope="scope">
                  <span v-if="!scope.row.isEdit">{{scope.row.department}}</span>
                  <span v-else><el-input v-model="scope.row.department"></el-input> </span>
              </template>
          </el-table-column>
          <el-table-column prop="time" label="入职时长"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button v-if="!scope.row.isEdit" @click="editData" type="text"
                >编辑</el-button
              >
                 <el-button v-else @click="saveOneData" type="text"
                >保存</el-button
              >
              <el-button
                type="text"
                size="small"
                @click.native.prevent="deleteData(scope.$index, tableData)"
                >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-row>
    <el-row gutter="22" style="margin-top:10px"> 
      <el-col :span="5" :offset="19">
        <el-button type="primary" @click="resetData">重置</el-button>
        <el-button type="primary" @click="saveData">提交</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getTableData } from "@/api/form/advancedForm.js";
export default {
  name: "hello",
  data() {
    return {
      storeForm: {},
      taskForm: {},
     // isEdit:false,
      spyOptions: [
        {
          value: "选项1",
          label: "小娜",
        },
        {
          value: "选项2",
          label: "小豆",
        },
        {
          value: "选项3",
          label: "小菲",
        },
        {
          value: "选项4",
          label: "晓婷",
        },
        {
          value: "选项5",
          label: "小敏",
        },
      ],
      typeOptions: [
        {
          value: "选项1",
          label: "公开",
        },
        {
          value: "选项2",
          label: "私密",
        },
      ],
      tableData: [],
    };
  },
  methods: {
      //初始化数据
    initData() {
      getTableData().then((res) => {
        if (res.data != null) {
          this.tableData = res.data;
        }
      });
    },
    //重置
    resetData() {
      this.storeForm = {};
      this.taskForm = {};
      this.initData()
    },
    //编辑表格
    editData(row){
        console.log(row)
        row.isEdit=true
    },
    //保存单条数据
    saveOneData(row){
        row.isEdit=false;
        console.log(row)
    },
    //删除表格
    deleteData(index, rows) {
      rows.splice(index, 1);
    },
    //保存表单
    saveData() {
      var query = Object.assign(this.taskForm, this.storeForm);
      query.tableData = this.tableData;
      console.log(query);
      this.$message({
        type: "primary",
        message: "提交成功",
      });
    },
  },
  mounted() {
    this.initData();
  },
};
</script>