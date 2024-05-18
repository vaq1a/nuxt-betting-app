<template>
  <div class="mines-slots-opponent">
    <span class="mines-slots-opponent__balls">
      25
    </span>
    <NuxtPicture
        :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: cover;'
      }"
        :src="`${ASSETS_IMAGES_PATH}red-sky.png`"
        class="mines-slots-opponent__image-wrapper"
        format="avif,webp,png"
    />
  </div>
</template>

<script lang="ts" setup>
import {ASSETS_IMAGES_PATH} from "~/constants/config";
</script>

<style lang="scss" scoped>
  @import './MinesSlotsOpponent';
</style>