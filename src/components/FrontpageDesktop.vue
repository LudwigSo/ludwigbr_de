<template>
    <v-card class="centered-panel" id="frontpage-desktop">
        <div id="Header" class="header business-card">
            <span>Ich realisiere Ihr Projekt. Mit Software.</span>
        </div>

        <router-link to="/services#web-apps">
            <div id="web-apps-box" class="highlight-box" />
            <div id="WebApps" class="subheader business-card">
                <span>WebApps</span>
            </div>
            <div id="WebAppsText" class="text business-card">
                <span>Für jedes Gerät. <br> Laptop, Telefon, Tablet, <br> Uhr und Kühlschrank. <br> Im Browser - Überall.</span>
            </div>
        </router-link>

        <router-link to="/services#backend">   
            <div id="backend-box" class="highlight-box"></div>
            <div id="Backend" class="subheader business-card"> 
                <span>Backend</span>
            </div>
            <div id="BackendText" class="text business-card">
                <span>Die Logik Ihrer <br> Softwarelösung. </span>
            </div>
        </router-link>
    </v-card>
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
#frontpage-desktop {
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
    font-weight: 500; 
    font-size: 34px;
    color: rgba(179,0,0,1);
}

.highlight-box {
    position: absolute;
    border-radius: 5px;
    z-index: 10;
    background: #880000;
    opacity: 0;
    transition: opacity 0.5s;
}
.highlight-box:hover {
    opacity: 0.15;
    transition: all 0.5s;
}

#web-apps-box {
    left: 80px;
    top: 175px;
    width: 270px;
    height: 230px;
}
#backend-box {
    left: 400px;
    top: 175px;
    width: 215px;
    height: 230px;
}

#Backend {
    left: 430px;
    top: 195px;
    width: 112px;
    font-size: 29px;
    color: rgba(179,0,0,1);
}
#WebApps {
    left: 110px;
    top: 195px;
    width: 124px;
    font-size: 29px;
    color: rgba(179,0,0,1);
}

#BackendText {
    left: 430px;
    top: 258px;
    width: 145px;
    font-size: 20px;
    color: black;
    /* color: rgba(0,72,125,1); */
}
#WebAppsText {
    left: 110px;
    top: 258px;
    width: 209px;
    font-size: 20px;
    color: black;
    /* color: rgba(0,72,125,1); */
}
</style>