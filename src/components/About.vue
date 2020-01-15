<template>
  <div class="home">
    <div class="top-padding-without-list"></div>
    <v-subheader>Über mich</v-subheader>
    <v-divider> </v-divider>
    <div class="text">
      <img class="img-right" src="./../assets/profilepicture.jpg" height="295px" width="192px">       
      <div class="paragraph">
        Ich heiße Ludwig, bin studierter Wirtschaftsinformatiker und arbeite selbstständig als Software- und Webentwickler. 
        
      </div>
      <div class="paragraph">
        Bereits während meines Studiums habe ich angefangen selbstständig kleinere Softwareprojekte umzusetzen. Danach habe ich bei einem IT-Dienstleister als Entwickler gearbeitet und weitere Erfahrungen im Bereich IT und Softwareentwicklung sammeln können. 
        
      </div>
      
    </div>
    <contact></contact>    
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Contact from './Contact'

@Component({
  components: { Contact }
})
export default class Home extends Vue {

}
</script>

<style scoped>
  .text {
    padding: 12px 16px 0 16px; /* same as v-list on knowledge site*/
  }
  .text .paragraph {
    padding-bottom: 24px;
  }
  .img-right {
    float: right;
    margin-left: 15px;
  }
  .img-left {
    float: left;
    margin-right: 15px;
  }
</style>