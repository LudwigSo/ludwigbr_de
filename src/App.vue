<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="myColor-2-3"
    >
      <navigation></navigation>
    </v-navigation-drawer>

    <v-app-bar
      app
      class="myColor-2-3"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title id="toolbar">
        <div id="toolbar-text">Ludwig Breitsprecher, Softwareentwickler</div>
        <img id="toolbar-img" src="@/assets/logo-hell-transparent.png" height="45px">
      </v-toolbar-title>
    </v-app-bar> 

    <div id="background-image-container">
      <v-content class="content">
        <v-card
          class="centeredPanel myColor-2-3"
        >      
          <router-view/>
        </v-card>
      </v-content>
    </div>

    <v-footer
      app
      class="myColor-2-4"
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
.myColor-1-1 { color: #ff0000; } 
.myColor-1-2 { color: #b30000; } 
.myColor-1-3 { background-color: #ffbfbf; } 
.myColor-1-4 { background-color: #ff8080; } 

.myColor-2-1 { color: #ff8000; } 
.myColor-2-2 { color: #b35a00; } 
/* .myColor-2-3 { background-color: #FEE9A7 !important; } */
.myColor-2-3 { background-color: #FEF3D1 !important; }
.myColor-2-4 { background-color: #FEE9A7 !important; }
#app { 
  background: url(./assets/background.jpg) no-repeat center center fixed; 
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
  border-radius: 0px;
}
@media (min-width: 720px) {
  #app .centeredPanel {
  margin-top: 50px;
  margin-bottom: 50px;
  }
}
.footer {
  margin: 0 auto 0 auto;
}
.footer-text {
  /* color: green; */
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
  #app #toolbar {
    justify-content: end;
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
