<template>
    <div id="Frontpage-Desktop">
        <div id="Header" class="header business-card">
            <span>Ich realisiere Ihr Projekt. Mit Software.</span>
        </div>
        <div id="WebApps" class="subheader business-card">
            <span>WebApps</span>
        </div>
        <div id="Backend" class="subheader business-card">
            <span>Backend</span>
        </div>
        <div id="WebAppsText" class="text business-card">
            <span>Für jedes Gerät. <br> Laptop, Telefon, Tablet, <br> Uhr und Kühlschrank. <br> Im Browser - Überall.</span>
        </div>
        <div id="BackendText" class="text business-card">
            <span>Die Logik Ihrer <br> Softwarelösung. </span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'frontpageDesktop',

}
</script>

<style scoped>
.business-card {
    font-family: Jura;
    white-space: nowrap;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    overflow: visible;
    position: absolute;
}
#Frontpage-Desktop {
    /* position: absolute; */
    width: 720px;
    height: 457px;
    /* background-color: rgba(238,238,238,1); */
    overflow: hidden;
    --web-scale-on-resize: true;
    --web-enable-deep-linking: true;
}
#Header {
    left: 50px;
    top: 80px;
    width: 621px;
    font-weight: bold;
    font-size: 35px;
    color: rgba(179,0,0,1);
}
#Backend {
    left: 430px;
    top: 195px;
    width: 112px;
    font-size: 30px;
    color: rgba(179,0,0,1);
}
#WebApps {
    left: 110px;
    top: 195px;
    width: 124px;
    font-size: 30px;
    color: rgba(179,0,0,1);
}
#BackendText {
    left: 430px;
    top: 258px;
    width: 145px;
    font-size: 20px;
    /* color: rgba(0,72,125,1); */
}
#WebAppsText {
    left: 110px;
    top: 258px;
    width: 209px;
    font-size: 20px;
    /* color: rgba(0,72,125,1); */
}
</style>