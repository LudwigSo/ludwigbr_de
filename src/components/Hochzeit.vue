<template>
  <div class="home">
    <div class="top-padding-without-list"></div>
    <v-subheader>Hochzeitsfotos</v-subheader>
    <v-divider> </v-divider>
    <div class="text">
      <div class="link">
      <a href="https://breitix.selfhost.eu:12346/index.php/s/c9DNQeseC82ds6S">Hier geht es zu den Hochzeitsfotos</a>
      </div>
      <div>
        <br><br>
        Achtung: Euer Browser wird euch möglicherweise folgenden Fehler anzeigen "Dies ist keine sichere Verbindung". Etwas versteckt könnt ihr nach einem Klick auf "Erweitert" und dann "Weiter zu breitix.selfhost.eu (unsicher)" trotzdem auf die Seite navigieren.
        <br><br>        
        Der Hintergrund: Der Server auf dem die Fotos gespeichert sind steht in Schmöckwitz und wird von meinem Vater betrieben. Euer Browser erwartet ein Zertifikat von einer "offiziellen" Stelle, welches eine verschlüsselte Verbindung ermöglicht und bestätigt wem dieser Server gehört. Dieses Zertifikat ist hier selbst ausgestellt, damit die Verschlüsselung nach dem Standard im Internet funktioniert. Euer Browser zweifelt jedoch die Identität des Ausstellers an, weil es keine "offizielle" Bestätigung gibt. 
        </div>
        <br>
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
    padding: 12px 16px 0 16px; /* same as v-list on knowledge site*/
    font-size: 14px;
    margin-top: 50px;
    min-height: 150px;
  }

  .link {
    text-align: center;
    font-size: 25px;
  }
</style>