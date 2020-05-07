<template>
  <v-app id="app">
    <v-navigation-drawer
      id="navigation"
      v-model="drawer"
      clipped
      app
    >
      <navigation></navigation>
    </v-navigation-drawer>

    <v-app-bar
      app     
      class="titlebar-color" 
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="reverse-titlebar-color"/>
      <v-toolbar-title id="toolbar">
        <div id="toolbar-text">Ludwig Sonnenberg, Softwareentwickler</div>
        <div id="toolbar-text-small">Ludwig Sonnenberg</div>
        <img id="toolbar-img" src="@/assets/logo_kreis.png" height="48px">
      </v-toolbar-title>      
    </v-app-bar> 

    <div id="background-image-container">
      <v-content class="content">
        <v-card
          class="centeredPanel"
        >      
          <router-view/>
        </v-card>
      </v-content>
    </div>

    <v-footer
      app      
      class="footer-color"
    >
      <div class="footer">
        <router-link class="footer-text" to="/contact">Kontakt</router-link> 
        <router-link class="footer-text" to="/imprint">Impressum</router-link>
        <a class="footer-text" href="https://github.com/ludwigbr" target="_blank">GitHub</a>
      </div>
    </v-footer>
  </v-app>  
</template>

<script lang="ts">
import Vue from 'vue';
import Navigation from './components/Navigation.vue'

export default Vue.extend({
  name: 'App',
  components: { 
    Navigation,
    },
  data: () => ({
      drawer: null,
  }),
});
</script>

<style>
.footer-color {
  background-color: lightgray !important;
  color: white !important;
}

.titlebar-color {
  background-color: #880000 !important;
  color: white !important;
}

.reverse-titlebar-color {
  background-color: white !important;
  color: #880000 !important;
}

#navigation {
  background-color: whitesmoke;
  min-width: 260px;
}

#app { 
  /* background: url(./assets/background.jpg) no-repeat center center fixed;  */
  background-color: white;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 1;
  font-family: Jura;
}
#app .centeredPanel {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px !important;
}
@media (min-width: 720px) {
  #app .centeredPanel {
  margin-top: 50px;
  margin-bottom: 50px;
  }
}
.v-sheet {
  border-radius: 5px !important;
}

.footer {
  margin: 0 auto 0 auto;
}
.footer-text {
  padding: 0 5px 0 5px;
  font-size: 10px;  
}
a {
  text-decoration: none
}
#toolbar {
  display: flex;
  overflow: hidden;
  margin: 1em 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
} 
@media (max-width: 719px) {
  #app #toolbar-text {
    display: none;
  }
}
@media (min-width: 720px) {
    #app #toolbar-text-small {
    display: none;
  }
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