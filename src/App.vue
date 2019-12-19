<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <navigation></navigation>
    </v-navigation-drawer>

    <v-app-bar
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Ludwig Breitsprecher, Softwareentwicklung</v-toolbar-title>
    </v-app-bar> 

    <div id="background-image-container">
      <v-content class="content">
        <v-card
          max-width="720"
          class="centeredPanel"
        >      
          <router-view/>
        </v-card>
      </v-content>
    </div>

    <v-footer
      app
    >
      <div class="footer">
        <router-link class="footer-text" to="/contact">Kontakt</router-link> 
        <router-link class="footer-text" to="/imprint">Impressum</router-link>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navigation from './components/Navigation.vue'

export default Vue.extend({
  name: 'App',
  components: { Navigation },
  data: () => ({
      drawer: null,
  }),
});
</script>

<style>
#app { 
  background: url(./assets/background.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 1;
}
#app .centeredPanel {
  margin-left: auto;
  margin-right: auto;
  border-radius: 0px;
}
@media (min-width: 720px) {
  #app .centeredPanel {
  margin-top: 50px;
  }
}
.footer {
  margin: 0 auto 0 auto;
}
.footer-text {
  color: lightgray;
  padding: 0 5px 0 5px;
  font-size: 10px;  
}
a {
  text-decoration: none
}
/* 
  copies css of <v-list-item-subtitle>
  used in other components
*/
.list-content { 
    white-space: initial;
    -webkit-box-orient: vertical;
    -webkit-box-flex: 1;
    display: -webkit-box;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.2;
    font-size: 0.875rem;
    flex: 1 1 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}
.top-padding-without-list {
  padding-top: 8px;
}
</style>
