<template>
  <div>
    <iframe ref="iframe" id="iframe" style="border:0px;height:100vh;width:95%" :src="src"></iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src:"http://localhost:8080/#/other/EasyFlowPanel"
    };
  },
  methods: {
    initData() {
      var query = {
         Id: "434343erererfcdsd3442",
      };
      this.$refs.iframe.contentWindow.postMessage(
        {
          type: "preview",
          data: query
        },
        this.src
      );
    }
  },
  created() {
    this.initData();
  }
};
</script>