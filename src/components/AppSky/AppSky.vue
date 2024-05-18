<template>
  <div class="sky">
    <NuxtPicture
        :imgAttrs="{
        style: 'width: 100%;height: 100%;object-fit: cover;'
      }"
        :src="`${ASSETS_IMAGES_PATH}sky.png`"
        class="sky__image-wrapper"
        format="avif,webp,png"
    />
    <DecorativeSnow
        :imageIndex="28"
        class="sky__snow sky__snow--first"
    />
    <DecorativeSnow
        :imageIndex="29"
        class="sky__snow sky__snow--second"
    />
    <DecorativeSnow
        :imageIndex="30"
        class="sky__snow sky__snow--third"
    />
    <DecorativeSnow
        :imageIndex="31"
        class="sky__snow sky__snow--fourth"
    />
    <NuxtPicture
        :imgAttrs="{
        style: 'width: 100%;height: 100%;object-fit: cover;'
      }"
        :src="`${ASSETS_IMAGES_PATH}reindeer-sleigh.png`"
        class="sky__reindeer-sleigh"
        format="avif,webp,png"
    />
    <AppSkyPoints class="sky__points" />
  </div>
</template>

<script lang="ts" setup>

import {ASSETS_IMAGES_PATH} from "~/constants/config";
</script>

<style lang="scss" scoped>
  @import './AppSky';
</style>