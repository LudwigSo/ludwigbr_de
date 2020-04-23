<template>
  <div class="home">
    <div class="top-padding-without-list"></div>
    <v-subheader>Über mich</v-subheader>
    <v-divider> </v-divider>
    <div class="text">
      <div class="row">
        <div class="col-sm-8">
          <div class="paragraph">
            Ich heiße Ludwig, bin studierter Wirtschaftsinformatiker und arbeite selbstständig als Software- und Webentwickler. 
          </div>
          <div class="paragraph">
            Bereits während meines Studiums habe ich angefangen selbstständig kleinere Softwareprojekte umzusetzen. Danach habe ich bei einem IT-Dienstleister als Entwickler gearbeitet und weitere Erfahrungen im Bereich IT und Softwareentwicklung sammeln können. 
          </div>
        </div>
        <div class="col-sm-4">
        <img src="@/assets/profilepicture.jpg">       
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'About',
});
</script>

<style scoped>
  .text {
    padding: 12px 16px 0 16px; /* same as v-list on knowledge site*/
  }
  .text .paragraph {
    padding-bottom: 24px;
  }
  img {
    width: 100%;
    object-fit: contain;
    max-height: 300px;
    margin-left: auto;
    margin-right: auto;
  }
</style>