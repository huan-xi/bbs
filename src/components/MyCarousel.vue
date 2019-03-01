<template>
    <Carousel autoplay :autoplay-speed="7000" easing loop>
        <CarouselItem>
            <div class="carouse-item">
                <img src="http://pic28.photophoto.cn/20130830/0005018373595008_b.jpg" alt="...">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="carouse-item">
                <img src="http://t2.hddhhn.com/uploads/tu/201610/198/uxkqdrirglw.jpg" alt="...">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="carouse-item">
                <img src="http://t2.hddhhn.com/uploads/tu/201610/198/scx30045vxd.jpg" alt="...">
            </div>
        </CarouselItem>
    </Carousel>
</template>

<script>
    export default {
        name: "MyCarousel"
    }
</script>

<style scoped>
.carouse-item img{
    width: 100%;
    height: 340px;
}
</style>
