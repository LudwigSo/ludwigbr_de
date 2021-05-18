<template>
  <div class="home"> 
    <div class="frontpage">
      <frontpageDesktop></frontpageDesktop>
    </div>

    <div class="frontpage-mobile">
      <frontpageMobile></frontpageMobile>
    </div>
    <v-divider> </v-divider>
    <contact></contact>    
  </div>

</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Contact from './Contact'
import FrontpageDesktop from './FrontpageDesktop'
import FrontpageMobile from './FrontpageMobile'

@Component({
  components: 
  { 
    Contact, 
    FrontpageDesktop, 
    FrontpageMobile 
  }
})
export default class Home extends Vue {
  
}
</script>
<style scoped>
  .frontpage {
    display: block;
  }
  .frontpage-mobile {
    display: none;
  }
  @media (max-width: 719px) {
    .frontpage {
      display: none;
    }
    .frontpage-mobile {
      display: block;
    }
  }
 
  img {
    width: 100%;
    object-fit: contain;
    max-height: 200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>