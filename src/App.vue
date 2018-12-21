<template>
    <div>
        <router-view/>
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

    @media screen and (min-width: 1200px) {
        body {
            width: 1200px;
        }
    }
</style>
