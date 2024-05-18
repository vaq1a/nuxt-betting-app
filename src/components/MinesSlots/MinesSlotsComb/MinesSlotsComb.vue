<template>
  <NuxtPicture
      :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: cover;'
      }"
      :src="`${ASSETS_IMAGES_PATH}question.png`"
      class="mines-slots-comb"
      format="avif,webp,png"
  />
</template>

<script lang="ts" setup>
import {ASSETS_IMAGES_PATH} from "~/constants/config";
</script>

<style lang="scss" scoped>
  @import './MinesSlotsComb';
</style>