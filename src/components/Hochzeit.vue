<template>
  <div class="home">
    <div class="top-padding-without-list"></div>
    <v-subheader>Hochzeitsfotos</v-subheader>
    <v-divider> </v-divider>
    <div class="text">
      <a href="https://breitix.selfhost.eu:12346/index.php/s/c9DNQeseC82ds6S">Hier geht es zu den Hochzeitsfotos</a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Hochzeit',
});
</script>

<style scoped>
  .text {
    text-align: center;
    padding: 12px 16px 0 16px; /* same as v-list on knowledge site*/
    font-size: 25px;
    margin-top: 50px;
    min-height: 150px;
  }
</style>