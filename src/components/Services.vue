<template>
  <v-card class="centeredPanel services">
    <div class="top-padding-without-list"></div>
    <v-subheader>Was ich Ihnen biete</v-subheader>
    <v-divider> </v-divider>

    <div class="text">
      <div class="row"> 
        <div class="col-sm-12"> 
          Ich biete Ihnen professionelle Unterstützung bei der Umsetzung Ihrer Softwareprojekte. 
          Dabei können wir die Digitalisierung in Ihrem Unternehmen vorantreiben, in die Jahre gekommene Software auf den neusten Stand bringen oder Ihren persönlichen Softwarewunsch umsetzen.
          Gern begleite ich Sie je nach Wunsch durch den gesamten Entwicklungsprozess von der Konzeptionierung bis zur Implementierung.
        </div>
      </div>
      <div class="row"> 
        <div class="col-sm-12"> 
          Falls Sie sich nicht sicher sind, ob ich Ihren technologischen Wünschen gerecht werden kann, <router-link to="/contact">kontaktieren </router-link>Sie mich gern.
        </div>
      </div>
    </div>

    <div id="web-apps"/>
    <v-subheader>WebApps</v-subheader>
    <v-divider> </v-divider>
    <div class="advantage">
      <!-- <div class="advantage-icon"><img src="@/assets/services_background.jpg"> </div> -->
      <div class="advantage-text">
        <div class="advantage-title">beliebiges Endgerät</div>
        <div class="advantage-subtitle">Ihre Anwendung wird über den Browser aufgerufen und kann auf allen Endgeräten die über einen Browser verfügen benutzt werden.</div>
      </div>
    </div>
    <div class="advantage">
      <div class="advantage-title">schlichtes responsive Design</div>
      <div class="advantage-subtitle">Design mit Fokus auf Funktionalität und intuitive Benutzbarkeit.</div>
    </div>
    <div class="advantage">
      <div class="advantage-title">moderne Technologien</div>
      <div class="advantage-subtitle">Einsatz eines modernen Javascript Frameworks, zum Beispiel Vue.js. Backend Technologien nach Bedarf der Anwendung.</div>
    </div>

    <div id="backend"/>
    <v-subheader>Backend</v-subheader>
    <v-divider> </v-divider>
    <div class="advantage">
      <div class="advantage-title">Flexible Programmiersprachen</div>
      <div class="advantage-subtitle">C#, GoLang, PHP, verschiedene Programmiersprachen für Ihren individuellen Anwendungszweck.</div>
    </div>
    <div class="advantage">
      <div class="advantage-title">Bereitstellung als (REST) API</div>
      <div class="advantage-subtitle">Moderne API Architektur. Für die reibungslose Verwendung im Frontend oder als Integration in Ihre bestehende Servicelandschaft.</div>
    </div>
    <br />
  </v-card>
</template>

<script>
export default {
  name: 'services',
  methods: {
    scrollToId(id) {
      var element = window.document.getElementById(id);
      const toolbarHeight = -64;
      const y = element.getBoundingClientRect().top + window.pageYOffset + toolbarHeight;
      window.scrollTo({top: y, behavior: 'smooth'})
    }
  },
  mounted: function() {
    let anchor = "";
    if (this.$route.hash != "") {
      anchor = this.$route.hash.substring(1);
    }
    if (anchor == "") {
      return;
    }
    this.scrollToId(anchor);
  }
}
</script>

<style scoped>
  .advantage {
    position: relative;
    margin: 30px;
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .advantage-title {
    font-size: 20px;
    color: #880000;
    text-transform: capitalize;
  }
  .advantage-subtitle {
    margin-top: 8px;
    opacity: 0.7;
  }

  .text {
    padding: 12px 16px 0 16px; /* same as v-list on knowledge site*/
  }
  img {
    width: 100%;
    object-fit: contain;
    max-height: 200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
