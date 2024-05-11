<template>
  <swiper
      ref="swiperRef"
      :loop="true"
      class="banners-slider swiper"
      @swiper="onSwiper"
  >
    <swiper-slide class="banners-slider__slide swiper-slide">
      <BannersSliderItem />
    </swiper-slide>
    <swiper-slide class="banners-slider__slide swiper-slide">
      <BannersSliderItem />
    </swiper-slide>

    <BannersSliderButton
        @click="swiperPrevSlide"
    />
    <BannersSliderButton
        clickType="next"
        @click="swiperNextSlide"
    />
    <DecorativeSnow
        :image-index="3"
        class="banners-slider__snow banners-slider__snow--top-left"
    />
    <DecorativeSnow
        :image-index="4"
        class="banners-slider__snow banners-slider__snow--top-right"
    />
    <DecorativeSnow
        :image-index="5"
        class="banners-slider__snow banners-slider__snow--bottom-left"
    />
    <DecorativeSnow
        :image-index="6"
        class="banners-slider__snow banners-slider__snow--bottom-right"
    />
  </swiper>
</template>

<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import type {Swiper as SwiperClass} from 'swiper';
import 'swiper/css';

const swiperInstance = ref()

function onSwiper(swiper: SwiperClass) {
  swiperInstance.value = swiper
}
const swiperNextSlide = () => {
  swiperInstance.value.slideNext()
};
const swiperPrevSlide = () => {
  swiperInstance.value.slidePrev()
};

</script>

<style lang="scss" scoped>
  @import "./BannersSlider";
</style>