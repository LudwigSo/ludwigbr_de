<template>
    <div id="Frontpage-Mobile">
        <div id="Header" class="header">
            <div>Ich realisiere Ihr Projekt.</div>
            <div>Mit Software.</div>
        </div>
        <div id="WebApps" class="subheader">
            <span>WebApps</span>
        </div>
        <div id="Backend" class="subheader">
            <span>Backend</span>
        </div>
        <div id="WebAppsText" class="text">
            <span>Für jedes Gerät. <br> Laptop, Telefon, Tablet, <br> Uhr und Kühlschrank. <br> Im Browser - Überall.</span>
        </div>
        <div id="BackendText" class="text">
            <span>Die Logik Ihrer <br> Softwarelösung. </span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'frontpageMobile',

}
</script>

<style scoped>
#Frontpage-Mobile {
    overflow: hidden;
    height: 500px;
    --web-scale-on-resize: true;
    --web-enable-deep-linking: true;
}
#Header {
    overflow: visible;
    width: 100%;
    white-space: normal;
    text-align: center;
    font-family: Frank Ruhl Hofshi;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: rgba(179,0,0,1);
}

.subheader {
    width: 100%;
    overflow: visible;
    white-space: nowrap;
    text-align: center;
    font-family: Frank Ruhl Hofshi;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(179,0,0,1);
}
/* #Backend {
    left: 430px;
    top: 195px; 
    width: 100%;
}
#WebApps {
    left: 110px;
    top: 195px; 
    width: 124px;

} */
#BackendText {
    /* left: 430px;
    top: 258px; */
    overflow: visible;
    width: 145px;
    white-space: nowrap;
    text-align: left;
    font-family: Frank Ruhl Hofshi;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    /* color: rgba(0,72,125,1); */
}
#WebAppsText {
    /* left: 110px;
    top: 258px; */
    overflow: visible;
    width: 209px;
    white-space: nowrap;
    text-align: left;
    font-family: Frank Ruhl Hofshi;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    /* color: rgba(0,72,125,1); */
}
</style>