<template>
  <div class="tower">
    <div class="tower__triangle"></div>
    <NuxtPicture
        :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: cover;'
      }"
        :src="`${ASSETS_IMAGES_PATH}tower.png`"
        class="tower__image-wrapper"
        format="avif,webp,png"
    />
    <NuxtPicture
        :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: cover;'
      }"
        :src="`${ASSETS_IMAGES_PATH}tower-sign.png`"
        class="tower-sign__image-wrapper"
        format="avif,webp,png"
    />
    <span class="tower__count">
      0.00%
    </span>
  </div>
</template>

<script lang="ts" setup>

import {ASSETS_IMAGES_PATH} from "~/constants/config";
</script>

<style lang="scss" scoped>
  @import './AppTower';
</style>