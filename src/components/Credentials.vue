<template>

  <div class="credentials">
    <div class="top-padding-without-list"></div>
      <v-subheader>Abgeschlossene Projekte</v-subheader>
      <v-divider> </v-divider>

      <div class="imagesWrapper">
      <div 
        v-for="(src, index) in imgs"
        :key="index"
        class="image"
        @click="() => showImg(index)"
      >
        <img width="100%" :src="src">
      </div>
    </div>
    <lightbox
      :visible="visible"
      :imgs="imgs"
      @hide="handleHide"
    ></lightbox>
  </div>
</template>

<script>
import Vue from 'vue'
import Lightbox from 'vue-easy-lightbox'

export default {
  name: 'credentials',
  components: {
    Lightbox
  },
  data() {
    return {
      // index: 0,
      visible: false,
      imgs: [
        '/credentials/athlete/athlete_login.jpg',
        '/credentials/athlete/athlete_calendar.jpg',
        '/credentials/athlete/athlete_profile.jpg',
        '/credentials/athlete/athlete_nutrition.jpg',
      ]
    }
  },
  methods: {
    showImg (index) {
        window.console.log("Test")
        this.index = index
        this.visible = true
      },
    handleHide() {
      this.visible = false
    }
  }
}
</script>

<style scoped>
  .image {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 4px;
    padding: 0px;
  }
  .imagesWrapper {
    margin-top: 10px;
  }
</style>