<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>
<script>
import { Map, View } from "ol";
import "ol/ol.css";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
export default {
  data() {
    return {
        map:null,
    };
  },
  methods: {
    initMap() {
      this.map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        target: "map",
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>
<style scoped>
.map {
  width: 100%;
  height: 750px;
}
</style>