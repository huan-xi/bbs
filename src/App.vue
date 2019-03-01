<template>
    <div>
        <my-header/>
        <router-view/>
        <my-footer/>
    </div>

</template>

<style>
    a, a:hover, a:link, a:visited {
        text-decoration: none !important;
        cursor: url("./assets/link.png"), pointer !important;
    }

    button:hover {
        cursor: url("./assets/link.png"), pointer;
    }

    html, body {
        min-height: 100%;
        cursor: url("./assets/default.png"), default;
    }

    body {
        height: 100%;
        margin: 0 auto !important;
        background-image: url("./assets/main_bg.png");
    }

    @media screen and (min-width: 1080px) {
        body {
            width: 1080px;
        }
    }
</style>
<script>
    import MyHeader from './components/Header'
    import MyFooter from "./components/Footer"
    export default {
        components: {MyFooter, MyHeader}
    }
</script>
