<template>
  <NuxtPicture
      :imgAttrs="{
            style:'width: 100%;height: 100%;object-position: center;object-fit: cover;border-radius: 1.2rem;'
      }"
      :src="`${ASSETS_IMAGES_PATH}main-banner.jpg`"
      class="promo-banner"
      format="avif,webp,png"
  />
</template>

<script lang="ts" setup>
import {ASSETS_IMAGES_PATH} from "~/constants/config";
</script>

<style lang="scss" scoped>
  @import './BannersSliderItem';
</style>