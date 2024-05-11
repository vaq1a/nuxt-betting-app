<template>
  <NuxtPicture
      :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: cover;'
      }"
      :src="`${ASSETS_IMAGES_PATH}ring.png`"
      class="jackpot-drum-ring jackpot-drum-ring--spin-animation"
      format="avif,webp,png"
  />
</template>

<script lang="ts" setup>

import {ASSETS_IMAGES_PATH} from "~/constants/config";
</script>

<style lang="scss" scoped>
  @import './JackpotDrumRing';
</style>