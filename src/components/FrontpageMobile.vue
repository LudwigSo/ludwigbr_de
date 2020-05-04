<template>
    <div id="Frontpage-Mobile">
        <div id="Header" class="header">
            <div>Ich realisiere Ihr Projekt.</div>
            <div>Mit Software.</div>
        </div>

        <router-link to="/services#web-apps">
            <div id="WebApps" class="subheader">
                <span>WebApps</span>
                <div class="subheader-text">
                    <span>Für jedes Gerät. <br> Laptop, Telefon, Tablet, Uhr und Kühlschrank. <br> Im Browser - Überall.</span>
                </div>
            </div>
        </router-link>

        <router-link to="/services#backend">
            <div id="Backend" class="subheader">
                <span>Backend</span>
                <div class="subheader-text">
                    <span>Die Logik Ihrer <br> Softwarelösung. </span>
                </div>
            </div>
        </router-link>        
    </div>
</template>

<script>
export default {
  name: 'frontpageMobile',

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

#Frontpage-Mobile {
    overflow: hidden;
    height: 500px;
    --web-scale-on-resize: true;
    --web-enable-deep-linking: true;
}
#Header {
    width: 100%;
    margin-top: 35px;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    color: rgba(179,0,0,1);
}

.subheader {
    margin-top: 25px;
    width: 100%;
    text-align: center;
    font-size: 25px;
    color: rgba(179,0,0,1);
}

.subheader-text {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
    font-style: normal;
    color: black;
}
</style>