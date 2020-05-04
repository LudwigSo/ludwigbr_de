<template>
  <div class="services">
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
    </div>
    <div id="web-apps"/>
    <v-subheader>WebApps</v-subheader>
    <v-divider> </v-divider>
    <div class="text"> 
      <div class="row"> 
        <!-- <img class="col-sm-3" src="@/assets/computer.jpg" height="108px" width="192px">  -->
        <div class="col-sm-9"> 
          Mein Fokus liegt dabei auf der Entwicklung von Web Apps. Diese profitieren von einer geräteunabhängigen Nutzeroberfläche, welche mit jedem modernen Browser verwendet werden kann. 
          Die Verarbeitung der Daten kann in der Cloud, auf einem einzelnen zentralen Server oder in Ihrem lokalen Netzwerk stattfinden.
        </div>
        <img class="col-sm-3" src="@/assets/services_background.jpg"> 
      </div>     
    </div>

    <div id="backend"/>
    <v-subheader>Backend</v-subheader>
    <v-divider> </v-divider>
    <div class="text">
      <div class="row"> 
        <div class="col-sm-12"> 
          Das Backend beinhaltet üblicherweise die Logik ihrer Anwendung. Hier werden Entscheidungen getroffen und Prozesse ausgelöst. 
        </div>
      </div>

      <div class="row"> 
        <img class="col-sm-3" src="@/assets/computer.png" width="134px"> 
        <div class="col-sm-9"> 
          Darüber hinaus entwickle ich ebenso Anwendungen die direkt auf Ihrem Computer ausgeführt werden können. 
          Welche Technologie ich empfehle und einsetze hängt maßgeblich von der konkreten Anwendung ab. 
          Falls Sie sich nicht sicher sind, welche Technologie für ihren Softwarewunsch geeignet ist, <router-link to="/contact">kontaktieren </router-link>Sie mich gern.
        </div>
      </div>
      <div class="row"> 
        <div class="col-sm-6"> 
        Welche Programmiersprachen ich behersche und welche anderen technischen Fähigkeiten ich besitze finden Sie unter dem Menüpunkt <router-link to="/knowledge">Kenntnisse</router-link>.
        </div>
        <img class="col-sm-6" src="@/assets/gears.jpg" width="288px"> 
      </div>
    </div>
  </div>
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
