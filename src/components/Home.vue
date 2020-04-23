<template>
  <div class="home">
    <div class="top-padding-without-list"></div>
    <!-- <v-subheader>Willkommen</v-subheader>
    <v-divider> </v-divider> -->
    <div class="text">
      <div class="row">
        <div class="col-sm-8">
          Ich realisiere Ihr Projekt. Mit Software!
        </div>
          Anwendungen
          Auf Ihrem Computer, in hübschen Fenstern oder auf der Kommandozeile.

          WebApps
          Für jedes Gerät. Laptop, Telefon, Tablet, Uhr und Kühlschrank. Überall.*
          *so lange ihr Gerät über einen Browser verfügt.
        <div class="col-sm-4">
          <img src="@/assets/logo-hell-transparent.png">       
        </div>
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
  img {
    width: 100%;
    object-fit: contain;
    max-height: 200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>