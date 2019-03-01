<template>
    <div>
        <my-carousel/>
        <posts/>
    </div>
</template>

<script>
    import MyCarousel from "../components/MyCarousel"
    import Posts from "../components/Posts"
    export default {
        name: "index",
        components: {Posts, MyCarousel}
    }
</script>

<style scoped>

</style>
