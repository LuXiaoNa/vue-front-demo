<template>
  <div>

    <div id="editor"></div>
    <div style="margin-top:30px;text-align:center">
      <el-button @click="sumbit" type="primary">提交</el-button>
      <el-button @click="cancel" type="primary">清空</el-button>
    </div>
  </div>
</template>

<script>
import wangeditor from "wangeditor";
export default {
  data() {
    return {
      content:"",
      editor:null
    };
  },
  methods: {
    initData() {
       this.editor = new wangeditor("#editor");
      // 设置编辑区域高度为 500px
      this.editor.config.height = 450   
      console.log(this.editor.txt.text())  
      this.editor.create();
    },
    sumbit() {
        this.content = this.editor.txt.html();
        console.log(this.content)
    },
    cancel(){
      this.editor.txt.clear()
    }
  },
  mounted() {
    this.initData();
  },
};
</script>