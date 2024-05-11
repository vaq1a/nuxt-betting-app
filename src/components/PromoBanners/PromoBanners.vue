<template>
  <div class="promo-banners">
    <NuxtPicture
        v-for="item in PROMO_BANNERS"
        :key="item.id"
        :class="`promo-banners__item promo-banners__item--${item.serialNumber}`"
        :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: cover; object-position: center;'
      }"
        :src="`${ASSETS_IMAGES_PATH}${item.imageName}.png`"
        format="avif,webp,png"
    />
  </div>
</template>

<script lang="ts" setup>
import {ASSETS_IMAGES_PATH} from "~/constants/config";
import {PROMO_BANNERS} from "~/constants/promoBanners";
</script>

<style lang="scss" scoped>
  @import "./PromoBanners";
</style>