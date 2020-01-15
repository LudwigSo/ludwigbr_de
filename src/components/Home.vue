<template>
  <div class="home">
    <div class="top-padding-without-list"></div>
    <v-subheader>Willkommen</v-subheader>
    <v-divider> </v-divider>
    <div class="text">
      <img class="img-right" src="./../assets/Logo_transparent.svg" height="295px" width="192px">       
      <div class="paragraph">
        Willkommen bei Ludwig Breitsprecher, Ihrem Softwareentwickler.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
      
    </div>
    <!-- <contact></contact>     -->
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