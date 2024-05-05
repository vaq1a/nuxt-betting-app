<template>
  <NuxtPicture
      :imgAttrs="{
        style: 'width: 100%;height: 100%;object-fit: cover;'
      }"
      :src="`${ASSETS_IMAGES_PATH}badge-default.png`"
      class="status-badge"
      format="avif,webp,png"
  />
</template>

<script lang="ts" setup>
import {ASSETS_IMAGES_PATH} from "~/constants/config";
</script>

<style lang="scss" scoped>
@import './StatusBadge';
</style>