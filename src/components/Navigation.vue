<template>
  <v-list>
    <router-link to="/">
      <v-list-item link class="marginBot20 router-link-list-item">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="navigation-title no-subtitle">Willkommen</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </router-link>

    <router-link to="/services">
      <v-list-item link class="marginBot20 router-link-list-item">
        <v-list-item-action>
          <v-icon>mdi-play-box</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="navigation-title">Dienstleistungen</v-list-item-title>
          <v-list-item-subtitle>Was ich Ihnen biete</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </router-link>

    <router-link to="/knowledge" >
      <v-list-item link class="marginBot20 router-link-list-item">
        <v-list-item-action>
          <v-icon>mdi-lightbulb-on</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="navigation-title">Kenntnisse</v-list-item-title>
          <v-list-item-subtitle>Technische Fähigkeiten</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </router-link>

    <router-link to="/credentials">
      <v-list-item link class="marginBot20 router-link-list-item">
        <v-list-item-action>
          <v-icon>mdi-image</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title  class="navigation-title">Referenzen</v-list-item-title>
          <v-list-item-subtitle>Abgeschlossene Projekte</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </router-link>

    <router-link to="/about">
      <v-list-item link class="marginBot20 router-link-list-item">
        <v-list-item-action>
          <v-icon>mdi-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title  class="navigation-title">Über mich</v-list-item-title>
          <v-list-item-subtitle>Lernen Sie mich kennen</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </router-link>

    <router-link to="/contact">      
      <v-list-item link class="router-link-list-item">
        <v-list-item-action>
          <v-icon>mdi-phone</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title  class="navigation-title">Kontakt</v-list-item-title>
          <v-list-item-subtitle>Wie Sie mich erreichen</v-list-item-subtitle>            
        </v-list-item-content>
      </v-list-item>
    </router-link>
  </v-list>
</template>

<script lang="ts">
export default {
    
}
</script>

<style scoped>
/* #navigation-img {
  position: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  width: 200px;
  height: 280px;
} */

div.router-link-list-item {
  background: inherit;
}
.router-link-exact-active {
  background: lightgray;
}
.navigation-title {
  line-height: 1.5rem !important;
  font-size: 1.3rem !important;
}
.no-subtitle {
  padding-top: 8.4px;
  padding-bottom: 8.4px;
}
.marginBot20 {
  margin-bottom: 20px;
}
</style>