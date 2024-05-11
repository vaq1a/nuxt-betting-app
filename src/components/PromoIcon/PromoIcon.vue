<template>
  <NuxtPicture
      :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: cover;'
      }"
      :src="`${ASSETS_IMAGES_PATH}crystal.png`"
      class="promo-icon"
      format="avif,webp,png"
  />
</template>

<script lang="ts" setup>
import {ASSETS_IMAGES_PATH} from "~/constants/config";
</script>

<style lang="scss" scoped>
  @import './PromoIcon';
</style>