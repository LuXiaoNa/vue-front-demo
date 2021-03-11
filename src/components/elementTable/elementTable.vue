<template>
  <div>
    <el-form :model="copyDatas" ref="editRowForm" :rules="tableRules" size="mini">
      <el-table
        :data="tableEditFlag?copyDatas.data:disEditDatas"
        :height="tableHeight"
        :stripe="tableStripe"
        :border="true"
        size="mini"
        ref="elementTable"
        :highlight-current-row="tableHighlight"
        :cell-style="colStyle"
        :row-class-name="setRowClass"
        @row-dblclick="rowdblClick"
        @row-click="rowClick"
        @header-contextmenu="headerMenu"
        width="100%"
      >
        <el-table-column
          :resizable="false"
          v-for="(item, index) in col"
          :key="`col_${index}`"
          :prop="dropCol[index].prop"
          :label="item.label"
          :formatter="dateFormatTable"
          :min-width="dropCol[index].width"
          align="center"
          :show-overflow-tooltip="true"
          :fixed="dropCol[index].fixed ? dropCol[index].fixed : null"
        >
          <template slot-scope="scope">
            <template v-if="dropCol[index].type != 'button'">
              <template
                v-if="
                ((dropCol[index].editAbled
                  ? dropCol[index].editAbled
                  : false) &&
                  tableIsEdit &&
                  dblClickInfo.prop == dropCol[index].prop &&
                  scope.row.index == dblClickInfo.rowIndex && tableEditFlag) ||
                (addkey &&
                  scope.row.index ==
                    (addFunc == 'unshift' ? '0' : copyDatas.data.length - 1) &&
                  (dropCol[index].editAbled ? dropCol[index].editAbled : false))
              "
              >
                <el-form-item
                  :prop="'data.'+scope.row.index+'.'+dropCol[index].prop"
                  :rules="tableRules[dropCol[index].prop]?tableRules[dropCol[index].prop]:{required:false}"
                >
                  <!--输入框-->
                  <el-input
                    :title="scope.row[dropCol[index].prop]"
                    v-if="dropCol[index].type == 'input'"
                    v-model.trim="scope.row[dropCol[index].prop]"
                    size="mini"
                    :maxlength="dropCol[index].maxlength?dropCol[index].maxlength:''"
                  ></el-input>
                  <!-- 下拉框 -->
                  <!-- <codelist
                    v-else-if="dropCol[index].type == 'select'&&dropCol[index].children.data==undefined &&!dropCol[index].children.load"
                    v-model="scope.row[dropCol[index].prop]"
                    @select="dropCol[index].children.select
                    ? dropCol[index].children.select
                    : ''"
                    :k="dropCol[index].children.k
                    ? dropCol[index].children.k
                    : 'dictionaryCode'"
                    :l="dropCol[index].children.l
                    ? dropCol[index].children.l
                    : 'dictionaryName'"
                    :apiUrl="dropCol[index].children.apiUrl
                    ? dropCol[index].children.apiUrl
                    : defaultUrl"
                    :code="dropCol[index].children.code
                    ? dropCol[index].children.code
                    : ''"
                    :clearable="dropCol[index].children.clearabled
                    ? dropCol[index].children.clearabled
                    : true"
                  ></codelist>
                  <codelist
                    v-else-if="dropCol[index].type == 'select'&&dropCol[index].children.data!=undefined &&!dropCol[index].children.load"
                    v-model="scope.row[dropCol[index].prop]"
                    @select="dropCol[index].children.select
                    ? dropCol[index].children.select
                    : ''"
                    :data="dropCol[index].children.data
                    ? dropCol[index].children.data
                    : ''"
                    :clearable="dropCol[index].children.clearabled
                    ? dropCol[index].children.clearabled
                    : true"
                    :k="dropCol[index].children.k
                    ? dropCol[index].children.k
                    : 'dictionaryCode'"
                    :l="dropCol[index].children.l
                    ? dropCol[index].children.l
                    : 'dictionaryName'"
                  ></codelist> -->

                  <el-select
                    v-else-if="dropCol[index].type == 'select'&&dropCol[index].children.load"
                    filterable
                    remote
                    :loading="loading"
                    :remote-method="(val)=>remoteMethod(val)"
                    v-model="scope.row[dropCol[index].prop]"
                    clearable
                    @focus="cleanAirport"
                    v-el-select-loadmore="loadmore"
                  >
                    <el-option
                      v-for="items in airportOptions"
                      :key="items.k"
                      :label="items.v"
                      :value="items.k"
                    >
                      <span style="float: left">{{ items.v }}</span>
                      <span style="float: right; color: #8492a6; font-size: 13px">{{ items.cn }}</span>
                    </el-option>
                  </el-select>
                  <!-- 日期 -->
                  <el-date-picker
                    v-else-if="dropCol[index].type == 'DatePicker'"
                    v-model="scope.row[dropCol[index].prop]"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="timeOption"
                    :format="dropCol[index].format"
                    size="mini"
                  ></el-date-picker>
                  <!-- 时间 -->
                  <el-time-picker
                    v-else-if="dropCol[index].type == 'TimePicker'"
                    v-model="scope.row[dropCol[index].prop]"
                    :format="dropCol[index].format"
                    :picker-options="timeOption"
                    placeholder="任意时间点"
                    size="mini"
                  ></el-time-picker>
                  <!-- 
                    :picker-options="dropCol[index].timeOptions"
                  -->
                  <!-- 日期时间 -->
                  <el-date-picker
                    v-else-if="dropCol[index].type == 'DateTimePicker'"
                    v-model="scope.row[dropCol[index].prop]"
                    type="datetime"
                    :format="dropCol[index].format"
                    :picker-options="timeOption"
                    placeholder="选择日期时间"
                    align="right"
                    size="mini"
                  ></el-date-picker>
                  <!-- 
                    :picker-options="pickerOptions"

                  -->
                  <!-- checkbox -->
                  <el-checkbox
                    v-if="dropCol[index].type == 'checkbox'"
                    v-model="scope.row[dropCol[index].prop]"
                    true-label="1"
                    false-label="0"
                  ></el-checkbox>
                </el-form-item>
              </template>

              <template v-else>
                <span
                  v-if="
                  dropCol[index].type == 'DatePicker' ||
                  dropCol[index].type == 'TimePicker' ||
                  dropCol[index].type == 'DateTimePicker'
                "
                >
                  {{
                  dateFormat(
                  scope.row[dropCol[index].prop],
                  dropCol[index].timeFormat
                  )
                  }}
                </span>
                <template v-else-if="dropCol[index].type == 'checkbox'">
                  <span
                    :class="
                    dropCol[index].rowIcon.type == 'icon'
                      ? dropCol[index].rowIcon[scope.row[dropCol[index].prop]]
                      : ''
                  "
                  >
                    {{
                    dropCol[index].rowIcon.type == "word"
                    ? dropCol[index].rowIcon[scope.row[dropCol[index].prop]]
                    : ""
                    }}
                  </span>
                </template>
                <template v-else-if="dropCol[index].type == 'index'">
                  {{
                  scope.row.index + 1
                  }}
                </template>
                <!-- <span
                  v-else
                >{{ codelistFormat(scope.column,scope.row[scope.column.property],index) }}</span> -->
              </template>
            </template>
            <template v-else>
              <el-button
                title="确认"
                type="success"
                v-show="
                (tableIsEdit &&
                  scope.row.index == dblClickInfo.rowIndex &&
                  dblClickInfo.isEdit &&tableEditFlag) ||
                (addkey &&
                  scope.row.index ==
                    (addFunc == 'unshift' ? '0' : copyDatas.data.length - 1))
              "
                @click.stop="modifyData(scope)"
                circle
                size="mini"
                icon="el-icon-check"
              ></el-button>
              <el-button
                :title="item.tooltip"
                v-for="item in buttonList"
                :key="'btn_' + item.methods"
                @click.stop="btnFunc(scope, item.methods)"
                :type="item.disabled?'text':item.type"
                :icon="item.icon"
                circle
                size="mini"
              ></el-button>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <div v-show="menuVisible" :style="menuStyle" class="element-header-menu" ref="menu">
      <el-checkbox-group v-model="showHeader" @change="handleCheckedHeader">
        <el-checkbox v-for="item in initCol" :label="item.prop" :key="item.prop">
          {{
          item.label
          }}
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
import Sortable from "sortablejs";
import { date2Str } from "@/utils/common.js";
export default {
  name: "elementTable",
  data() {
    return {
      addData: {},
      airportQuery: "",
      selectedAirport: [],
      searchList: [],
      loading: false,
      airportOptions: [],
      list: [],
      formDate: {
        page: 1,
        pageSize: 20
      },
      addFunc: "",
      clickedRow: {},
      selectFormat: "",
      tableIsEdit: false, //表格是否处于编辑状态，true：是，false：否
      dblClickInfo: {
        prop: "",
        rowIndex: 0,
        isEdit: false
      },
      submitBtn: true,
      addkey: false, //新增判断
      dropCol: Object.assign([], this.col),
      // rowCol: Object.assign([], this.col),
      initCol: Object.assign([], this.col),
      menuVisible: false,
      top: 0,
      left: 0,
      menuStyle: "",
      showHeader: [],
      timeOption: {
        disabledDate: time => {
          // if (this.editForm.startDate) {
          //   return (
          //     time.getTime() < new Date(this.editForm.startDate) ||
          //     time.getTime() < new Date("1970-01-01 00:00:00")
          //   );
          // } else {
          return time.getTime() < new Date("1970-01-01 00:00:00");
          // }
        }
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
    //   defaultUrl: "/common/dictionary/queryDictionarylistByTypeCode",
      tableValidate: true,
      clickedScope: {},
      copyDatas: {}
    };
  },
  props: {
    //表格高度
    tableHeight: {
      type: String,
      required: false,
      default: "400px"
    },
    // 表格条纹显示
    tableStripe: {
      type: Boolean,
      required: false,
      default: true
    },
    // 表格边框
    tableBorder: {
      type: Boolean,
      required: false,
      default: true
    },
    // 表格是否高亮
    tableHighlight: {
      type: Boolean,
      required: false,
      default: true
    },
    // 表格行样式
    setRowClassName: {
      type: Function,
      required: false,
      default: null
    },
    // 表格单元格样式
    setCellClassName: {
      type: Function,
      required: false,
      default: null
    },
    // 表头参数
    col: {
      type: Array,
      required: true
    },
    // 可编辑表格数据
    datas: {
      type: Object,
      required: false
    },
    // 不可编辑表格数据
    disEditDatas: {
      type: Array,
      required: false,
      default: null
    },
    // 按钮列表
    buttonList: {
      type: Array,
      required: false,
      default: null
    },
    //确认返回方法名
    modifyDataName: {
      type: String,
      required: false,
      default: null
    },
    // 表格类名
    tableClass: {
      type: String,
      required: false,
      default: "el-container"
    },
    // 表格校验规则
    tableRules: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    },
    // 表格是否可以编辑
    tableEditFlag: {
      type: Boolean,
      required: false,
      default: false
    },
    // 单击行的方法名
    rowClickName: {
      type: String,
      required: false
    },
    // codelist显示
    codelistFunc: {
      type: Function,
      required: false,
      default: null
    },
    loadList: {
      type: Object,
      required: false
    },
    tableRuleFunc: {
      type: Function,
      required: false,
      default: null
    }
  },
  mounted() {
    this.columnDrop();
    var checkboxGroup = new Array();
    for (let i = 0; i < this.col.length; i++) {
      checkboxGroup.push(this.col[i].prop);
    }

    this.showHeader = checkboxGroup;
    this.$nextTick(() => {
      this.$refs.elementTable.doLayout();
      this.set([]);
    });
  },
  methods: {
    delete(index) {
      this.copyDatas.data.splice(index, 1);
      this.datas.data = this.copyDatas.data;
    },
    set(value) {
      console.log(value);
      this.copyDatas = JSON.parse(JSON.stringify({ data: value }));
      this.datas.data = value;
    },
    cleanAirport(a) {
      this.airportQuery = "";
      this.searchList = new Array();
      this.formDate = {
        page: 1,
        pageSize: 20
      };
      this.selectedAirport = new Array();
      this.searchList = new Array();
      this.getList(this.formDate, a);
    },
    getList(formDate, value) {
      if (this.searchList.length != 0) {
        this.airportOptions = this.searchList.slice(
          0,
          formDate.page * formDate.pageSize
        );
      } else {
        this.airportOptions = this.loadList.list.slice(
          0,
          formDate.page * formDate.pageSize
        );
      }
      let num = 0;
      if (value) {
        for (let item of this.airportOptions) {
          if (item.k == value) {
            break;
          } else {
            num++;
            // let findCode = false;
          }
        }
        if (num == this.airportOptions.length) {
          for (let list of this.loadList.list) {
            if (list.k == value) {
              // findCode = true;
              this.selectedAirport.push(list);
              this.airportOptions.unshift(list);
              break;
            }
          }
        }
      }
    },
    loadmore() {
      this.formDate.page++;
      this.getList(
        this.formDate,
        this.copyDatas.data[this.dblClickInfo.rowIndex][this.loadList.prop]
      );
    },
    remoteMethod(query) {
      this.airportQuery = query;
      if (this.airportQuery != "") {
        this.searchList = new Array();
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.searchList = this.list.filter(item => {
            return item.v.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
          this.searchList = this.selectedAirport.concat(this.searchList);
          this.formDate = {
            page: 1,
            pageSize: 20
          };
          this.airportOptions = this.searchList.slice(
            0,
            this.formDate.page * this.formDate.pageSize
          );
        }, 200);
      } else {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.formDate = {
            page: 1,
            pageSize: 20
          };
          this.searchList = new Array();
          this.airportOptions = this.selectedAirport.concat(
            this.list.slice(0, this.formDate.page * this.formDate.pageSize)
          );
        }, 200);
      }
    },
    // codelistFormat(column, cellValue, index) {
    //   let codelistProperty = new Array();
    //   if (this.codelistFunc != null) {
    //     codelistProperty = this.codelistFunc();
    //     for (let codelistRules of codelistProperty) {
    //       if (
    //         codelistRules.prop == column.property &&
    //         this.dropCol[index].hasCellFormat
    //       ) {
    //         if (codelistRules.codelist[cellValue]) {
    //           return codelistRules.codelist[cellValue][codelistRules.key];
    //         } else {
    //           return cellValue;
    //         }
    //       } else if (!this.dropCol[index].hasCellFormat) {
    //         return cellValue;
    //       }
    //     }
    //   } else {
    //     return cellValue;
    //   }
    // },
    //设置行样式
    setRowClass({ row, rowIndex }) {
      row.index = rowIndex;
      if (this.setRowClassName) {
        return this.setRowClassName({ row, rowIndex });
      }
    },
    // 设置列颜色
    colStyle({ row, column, rowIndex, columnIndex }) {
      column.index = columnIndex;
      if (column.index < this.dropCol.length) {
        if (this.dropCol[column.index].type == "index") {
          row[this.dropCol[column.index].prop] = row.index + 1;
        }
        if (
          this.setCellClassName &&
          this.dropCol[column.index].hasNewCellStyle
        ) {
          let cellStyle = this.setCellClassName({
            row,
            rowIndex,
            column,
            columnIndex
          });
          for (let propStyle of cellStyle) {
            if (propStyle.prop == column.property) {
              for (let cellRule of propStyle.rules) {
                if (
                  row[propStyle.prop] != null &&
                  row[propStyle.prop] == cellRule.value
                ) {
                  return "background:" + cellRule.style;
                } else if (row[propStyle.prop] == null) {
                  return (
                    "background:" + this.dropCol[column.index].tableColumnColor
                  );
                }
              }
            }
          }
        } else {
          if (this.dropCol[column.index].tableColumnColor) {
            return "background:" + this.dropCol[column.index].tableColumnColor;
          }
        }
      }
    },
    setCurrentRow(row) {
      this.$refs.elementTable.setCurrentRow(row);
    },
    // 双击行的编辑
    rowdblClick(row, column) {
      if (this.dropCol[column.index].type != "button") {
        if (this.tableRuleFunc == null) {
          this.validateFormItem();
          if (this.tableValidate) {
            let columnIndex = column.index;
            this.dblClickInfo.prop = column.property;
            this.dblClickInfo.rowIndex = row.index;
            this.dblClickInfo.isEdit = this.dropCol[columnIndex].editAbled
              ? this.dropCol[columnIndex].editAbled
              : false;
            this.tableIsEdit = true;
            this.addkey = false;
            if (this.loadList) {
              this.list = this.loadList.list;
              this.getList(this.formDate, "");

              if (this.loadList.prop == column.property) {
                this.list = this.loadList.list;
                this.getList(this.formDate, row[column.property]);
              }
            }
          }
        } else {
          this.clickedScope = {
            row: row,
            column: column
          };
          this.tableRuleFunc(
            {
              row: this.copyDatas.data[this.dblClickInfo.rowIndex],
              column: column
            },
            this.clickCell
          );
        }
      }
    },
    // 单击行
    rowClick(row) {
      if (this.rowClickName) {
        this.$nextTick(() => {
          this.$emit("buttonFun", this.rowClickName, row);
        });
      }
    },
    clickCell() {
      // console.log(scope);
      let scope = this.clickedScope;
      this.validateFormItem();
      if (this.tableValidate) {
        let columnIndex = scope.column.index;
        this.dblClickInfo.prop = scope.column.property;
        this.dblClickInfo.rowIndex = scope.row.index;
        this.dblClickInfo.isEdit = this.dropCol[columnIndex].editAbled
          ? this.dropCol[columnIndex].editAbled
          : false;
        this.tableIsEdit = true;
        this.addkey = false;
        if (this.loadList) {
          this.list = this.loadList.list;
          this.getList(this.formDate, "");
          if (this.loadList.prop == scope.column.property) {
            this.list = this.loadList.list;
            this.getList(this.formDate, scope.row[scope.column.property]);
          }
        }
      }
    },
    //时间转换
    dateFormat(cellValue, formatter) {
      return date2Str(cellValue, formatter);
    },
    dateFormatTable(row, column, cellValue) {
      return date2Str(cellValue, this.selectFormat);
    },
    //循环按钮
    btnFunc(scope, methodsName) {
      if (this.addkey) {
        if (
          scope.$index ==
          (this.addFunc == "push" ? this.copyDatas.data.length - 1 : 0)
        ) {
          this.addkey = false;
        }
      }
      this.tableIsEdit = false;
      // this.addkey = false;
      this.tableValidate = true;
      this.dblClickInfo = {
        rowIndex: 0,
        prop: "",
        isEdit: false
      };

      this.$emit("buttonFun", methodsName, scope);
    },
    closeRow() {
      // 校验非空行
      let emptyRow = new Array();
      for (let tableProp of this.dropCol) {
        for (let item of this.$refs["editRowForm"].fields) {
          if (
            item.fieldValue != undefined &&
            item.fieldValue != "" &&
            item.fieldValue != null
          ) {
            emptyRow.push(item.prop.split(".")[2]);
          }
        }
      }
      if (this.tableRuleFunc == null) {
        if (this.addkey) {
          if (emptyRow.length != 0) {
            this.validateFormItem();
          }
        } else {
          this.validateFormItem();
          if (this.tableValidate) {
            this.tableIsEdit = false;
            this.dblClickInfo = {
              rowIndex: 0,
              prop: "",
              isEdit: false
            };
            if (this.loadList) {
              this.cleanAirport("");
            }
          }
        }
      } else {
        this.tableRuleFunc(
          { row: this.copyDatas.data[this.dblClickInfo.rowIndex] },
          this.ruleCheck
        );
      }
      return this.tableValidate;
    },
    // 列拖拽
    columnDrop() {
      if (this.tableClass != "el-container") {
        const wrapperTr = document.querySelector(
          "." + this.tableClass + " .el-table__header-wrapper tr"
        );
        Sortable.create(wrapperTr, {
          animation: 180,
          delay: 0,
          onEnd: evt => {
            const oldItem = this.dropCol[evt.oldIndex];
            this.dropCol.splice(evt.oldIndex, 1);
            this.dropCol.splice(evt.newIndex, 0, oldItem);
            this.$nextTick(() => {
              this.$refs.elementTable.doLayout();
            });
          }
        });
      }
    },
    //新增
    addNewFirstRow(value) {
      if (
        this.copyDatas.data.length != 0 &&
        (this.addkey || this.tableIsEdit)
      ) {
        this.modifyData({
          row: this.copyDatas.data[this.dblClickInfo.rowIndex]
        });
        this.validateFormItem();
      }
      setTimeout(() => {
        this.addRow(value, "unshift");
      }, 150);
    },
    addNewLastRow(value) {
      if (
        this.copyDatas.data.length != 0 &&
        (this.addkey || this.tableIsEdit)
      ) {
        this.modifyData({
          row: this.copyDatas.data[this.dblClickInfo.rowIndex]
        });
        this.validateFormItem();
      }
      setTimeout(() => {
        this.addRow(value, "push");
        this.$nextTick(() => {
          this.$refs.elementTable.bodyWrapper.scrollTop = this.$refs.elementTable.bodyWrapper.scrollHeight;
          this.$refs.elementTable.doLayout();
        });
      }, 150);
    },
    addRow(value, addFunc) {
      if (this.loadList) {
        this.list = this.loadList.list;
        this.getList(this.formDate, "");
      }
      if (this.tableValidate && !(this.addkey || this.tableIsEdit)) {
        this.dblClickInfo = {
          rowIndex: addFunc == "push" ? this.copyDatas.data.length : 0,
          prop: "",
          isEdit: false
        };
        this.addFunc = addFunc;
        this.addkey = true;
        this.addData = {};
        if (
          (this.tableEditFlag
            ? this.copyDatas.data.length
            : this.disEditDatas.length) != 0
        ) {
          this.addData = JSON.parse(
            JSON.stringify(
              (this.tableEditFlag ? this.copyDatas.data : this.disEditDatas)[0]
            )
          );
          for (let key in this.addData) {
            if (value != undefined) {
              if (key in value) {
                this.addData[key] = value[key];
              } else {
                if (this.addData[key] instanceof Array) {
                  this.addData[key] = [];
                } else {
                  this.addData[key] = undefined;
                }
              }
            } else {
              if (this.addData[key] instanceof Array) {
                this.addData[key] = [];
              } else {
                this.addData[key] = undefined;
              }
            }
          }
          (this.tableEditFlag ? this.copyDatas.data : this.disEditDatas)[
            addFunc
          ](this.addData);
          // this.$nextTick(() => {
          //   this.$refs.elementTable.doLayout();
          // });
        } else {
          this.addFunc = addFunc;
          (this.tableEditFlag ? this.copyDatas.data : this.disEditDatas)[
            addFunc
          ](value);
        }
      }
    },
    //确认
    modifyData(scope) {
      if (this.tableRuleFunc == null) {
        // this.validateFormItem();
        let validateList = new Array();
        let num = 0;
        let validates = true;
        // let validList = new Array();
        for (let tableProp of this.dropCol) {
          console.log(tableProp);
          for (let item of this.$refs["editRowForm"].fields) {
            console.log(item.prop.split(".")[2] == tableProp.prop);
            if (item.prop.split(".")[2] == tableProp.prop) {
              this.$refs["editRowForm"].validateField(item.prop, error => {
                num++;
                console.log(error);
                if (error != "") {
                  validates = false;
                } else {
                  validates = true;
                  validateList.push(item.prop);
                }
              });
            }
            if (!validates) break;
          }
          if (!validates) break;
        }
        console.error(num);
        console.error(validateList.length);
        console.error(validates);
        this.tableValidate = validates;
        if (num == validateList.length && validates) {
          this.tableIsEdit = false;
          this.addkey = false;
          if (this.modifyDataName) {
            this.$emit("buttonFun", this.modifyDataName, scope);
          }
          this.addData = {};
          this.dblClickInfo = {
            rowIndex: 0,
            prop: "",
            isEdit: false
          };
          if (this.loadList) {
            this.cleanAirport("");
          }
        }
      } else {
        this.tableRuleFunc(scope, this.ruleCheck);
      }
      this.datas.data = this.copyDatas.data;
    },
    ruleCheck(scope) {
      let validateList = new Array();
      let num = 0;
      let validates = true;
      // let validList = new Array();
      for (let tableProp of this.dropCol) {
        for (let item of this.$refs["editRowForm"].fields) {
          if (item.prop.split(".")[2] == tableProp.prop) {
            this.$refs["editRowForm"].validateField(item.prop, error => {
              num++;
              if (error != "") {
                validates = false;
              } else {
                validates = true;
                validateList.push(item.prop);
              }
            });
          }
          if (!validates) break;
        }
        if (!validates) break;
      }
      this.tableValidate = validates;
      console.error(num);
      console.error(validateList.length);
      if (num == validateList.length && validates) {
        this.tableIsEdit = false;
        this.addkey = false;
        if (this.modifyDataName) {
          this.$emit("buttonFun", this.modifyDataName, scope);
        }
        this.addData = {};
        this.dblClickInfo = {
          rowIndex: 0,
          prop: "",
          isEdit: false
        };
        if (this.loadList) {
          this.cleanAirport("");
        }
      }
    },
    // 表头右击事件
    headerMenu(column, event) {
      this.menuVisible = false;
      this.menuVisible = true;
      window.event.returnValue = false;
      document.addEventListener("click", this.closeHeaderContentMenu);
      this.top = event.clientY;
      this.left = event.clientX;
      this.menuStyle =
        "top:" + this.top + "px;left:" + this.left + "px;position:fixed";
    },
    // 右击关闭菜单
    closeHeaderContentMenu() {
      if (
        event.clientY < this.top ||
        event.clientY > this.top + this.$refs.menu.offsetHeight ||
        event.clientX < this.left ||
        event.clientX > this.left + 150
      ) {
        this.menuVisible = false;
        document.removeEventListener("click", this.closeHeaderContentMenu);
      }
    },
    // 表头选择
    handleCheckedHeader(val) {
      let newCol = new Array();

      for (let i = 0; i < val.length; i++) {
        for (let j = 0; j < this.initCol.length; j++) {
          // if (this.col[j].prop) {
          if (this.initCol[j].prop && val[i] == this.initCol[j].prop) {
            newCol.push(this.initCol[j]);
          }
        }
      }

      this.dropCol = newCol;
      this.col = newCol;

      this.$nextTick(() => {
        this.$refs.elementTable.doLayout();
      });
    },
    //提交时的整表检验方法
    validateTable() {
      this.validateFormItem();
      return this.tableValidate;
    },
    // 关闭弹窗时，恢复表格选中状态的方法
    closeParentDialog() {
      this.tableValidate = true;
      this.tableIsEdit = false;
      this.addkey = false;
      this.dblClickInfo = {
        rowIndex: 0,
        prop: "",
        isEdit: false
      };
      this.addData = {};
    },

    validateFormItem() {
      let validateList = new Array();
      for (let tableProp of this.dropCol) {
        for (let item of this.$refs["editRowForm"].fields) {
          if (item.prop.split(".")[2] == tableProp.prop) {
            this.$refs["editRowForm"].validateField(item.prop, error => {
              // this.$nextTick(() => {

              if (error != "") {
                this.tableValidate = false;
                this.dblClickInfo = {
                  prop: tableProp.prop,
                  rowIndex: item.prop.split(".")[1],
                  isEdit: tableProp.editAbled
                };
                this.tableIsEdit = true;
              } else {
                this.tableValidate = true;
              }
            });
            // });
          }
          if (!this.tableValidate) {
            this.tableIsEdit = true;
            break;
          }
        }
      }
    }
  },
  watch: {
    col: function(value) {
      this.dropCol = value;
      // this.initCol = value;
    }
  },
  directives: {
    "el-select-loadmore": {
      bind(el, binding) {
        const SELECTWRAP_DOM = el.querySelector(
          ".el-select-dropdown .el-select-dropdown__wrap"
        );
        SELECTWRAP_DOM.addEventListener("scroll", function() {
          const condition =
            this.scrollHeight - this.scrollTop <= this.clientHeight;
          if (condition) {
            binding.value();
          }
        });
      }
    }
  }
};
</script>
<style>
.element-header-menu {
  position: fixed;
  width: 200px;
  max-height: 400px;
  overflow-y: auto;
  display: block;
  background-color: rgba(7, 37, 58, 0.856);
  padding: 5px 10px;
  z-index: 2006;
}
</style>