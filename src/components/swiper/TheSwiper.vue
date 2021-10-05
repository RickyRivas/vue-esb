<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    class="mySwiper"
  >
    >
    <swiper-slide class="swiper-1">Slide 1</swiper-slide>
    <swiper-slide class='swiper-2'>Slide 2</swiper-slide>
    <swiper-slide class='swiper-3'>Slide 3</swiper-slide>
    ...
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style lang='scss'>
</style>