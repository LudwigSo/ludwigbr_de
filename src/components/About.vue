<template>
  <v-card class="centeredPanel">
    <div class="top-padding-without-list"></div>
    <v-subheader>Über mich</v-subheader>
    <v-divider> </v-divider>
    <div class="text">
      <div class="row">
        <div class="col-sm-8">
          <div class="paragraph">
            Meine Leidenschaft ist Softwareentwicklung. Insbesondere interessieren mich moderne Entwicklungsparadigmen, die uns helfen die Herausforderungen dieser schnelllebigen Zeit zu meistern. Moderne Software muss sich kurzfristig, oft und kostengünstig anpassen lassen.
          </div>
          <div class="paragraph">
            Als studierter Wirtschaftsinformatiker liegt mein Fokus auf der Funktion und Logik einer Anwendung. Dadurch sind von mir entworfene Benutzeroberflächen schlicht und funktional. Falls Ihre Anwendung aufwendige Grafiken und künstlerische Kreativität erfordern kann ich einen professionellen Designer nicht ersetzen.
          </div>
          <div class="paragraph"> 
            Technik und Digitalisierung ermöglichen mir meinen Lebenswandel. Bereits während meines Studiums in Ilmenau konnte ich von der Orstunabhängikeit des Softwareentwicklerdaseins profitieren und jetzt ist dies ein fester Bestandteil meines Lebens. 
          </div>
          <div class="paragraph">
            Lassen Sie uns gemeinsam Ihre digitale Vision umsetzen.
            <!-- Ich freue mich darüber wenn ich Sie bei der Umsetzung Ihrer digitalen Vision unterstützen kann. -->
          </div>
        </div>
        <div class="col-sm-4">
        <img src="@/assets/profilepicture.jpg">       
        </div>
      </div>
    </div>
  </v-card>
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