<template>
  <div class="services">
    <div class="top-padding-without-list"></div>
    <v-subheader>Was ich Ihnen biete</v-subheader>
    <v-divider> </v-divider>
    <div class="text">
      <div class="paragraph"> 
        Ich biete Ihnen professionelle Unterstützung bei der Umsetzung Ihrer Softwareprojekte. 
        Dabei können wir die Digitalisierung in Ihrem Unternehmen vorantreiben, in die Jahre gekommene Software auf den neusten Stand bringen oder Ihren persönlichen Softwarewunsch umsetzen.
        Gern begleite ich Sie je nach Wunsch durch den gesamten Entwicklungsprozess von der Konzeptionierung bis zur Implementierung.
      </div>
      <div class="paragraph">
        <img class="img-right" src="./../assets/services_background.jpg" height="108px" width="192px"> 
        <div>
        Mein Fokus liegt dabei auf der Entwicklung von Web Apps. Diese profitieren von einer geräteunabhängigen Nutzeroberfläche, welche mit jedem modernen Browser verwendet werden kann. 
        Die Verarbeitung der Daten kann in der Cloud, auf einem einzelnen zentralen Server oder in Ihrem lokalen Netzwerk stattfinden.
        </div>
      </div>
      <div class="paragraph"> 
        <img class="img-left top-padding" src="./../assets/computer.png" height="116px" width="134px"> 
        Darüber hinaus entwickle ich ebenso Anwendungen die direkt auf Ihrem Computer ausgeführt werden können. 
        Welche Technologie ich empfehle und einsetze hängt maßgeblich von der konkreten Anwendung ab. 
        Falls Sie sich nicht sicher sind, welche Technologie für ihren Softwarewunsch geeignet ist, <router-link to="/contact">kontaktieren </router-link>Sie mich gern.
      </div>
      <div class="paragraph"> 
        <img class="img-right" src="./../assets/network.jpg" height="128px" width="192px"> 
        Welche Programmiersprachen ich behersche und welche anderen technischen Fähigkeiten ich besitze finden Sie unter dem Menüpunkt <router-link to="/knowledge">Kentnisse</router-link>.
      </div>
      <div class="bottom-spacer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'services',

}
</script>

<style scoped>
  .text {
    padding: 12px 16px 0 16px; /* same as v-list on knowledge site*/
  }
  .text .paragraph {
    padding-bottom: 32px;
  }
  .top-padding {
    padding-top: 8px;
  }
  .img-right {
    float: right;
    margin-left: 15px;
  }
  .img-left {
    float: left;
    margin-right: 15px;
  }
  .bottom-spacer {
    padding-bottom: 30px;
  }

</style>
