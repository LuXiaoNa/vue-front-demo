<template>
  <div>
    <div style="margin-bottom:20px">
      <el-button type="pimary" size="mini" @click="playVideo">播放</el-button>
      <el-button type="pimary" size="mini" @click="stopVideo">暂停</el-button>
    </div>
    <!-- <div id="myPlayer"></div> -->
    <video
      id="myPlayer"
      src="https://open.ys7.com/v3/openlive/F76886507_1_2.m3u8?expire=1665312519&id=368832495960408064&t=67090a38b030332df733af8570afad5c6c829d851b35e5afb88791cb9f3b97f6&ev=100"
      controls
      playsInline
      webkit-playsinline
    ></video>
  </div>
</template>
<script>
// import EZUIKit from "ezuikit-js";
import { EZUIPlayer } from "@/utils/video/ezuikit.js";
export default {
  data() {
    return {
      player: null,
    };
  },
  methods: {
    playVideo() {
      //   this.player = new EZUIKit.EZUIKitPlayer({
      //     id: "myPlayer", // 视频容器ID
      //     accessToken:
      //       "at.3bvmj4ycamlgdwgw1ig1jruma0wpohl6-48zifyb39c-13t5am6-yukyi86mz",
      //       url:"ezopen://open.ys7.com/203751922/1.live"
      //     //url: "https://open.ys7.com/v3/openlive/F76886507_1_2.m3u8?expire=1665312519&id=368832495960408064&t=67090a38b030332df733af8570afad5c6c829d851b35e5afb88791cb9f3b97f6&ev=100",
      //   });
      //   console.log(this.player);
      this.player = new EZUIPlayer("myPlayer");
      this.player.play();
    },
    stopVideo() {
      this.player.stop();
    },
  },
};
</script>
<style scoped>
#myPlayer {
  height: 600px;
  width: 800px;
}
</style>