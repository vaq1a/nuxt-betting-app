<template>
  <div class="rewards-banner">
    <div class="rewards-banner__content">
      <h3 class="rewards-banner__title">
        DAILY CASES
      </h3>
      <p class="rewards-banner__description">
        The daily free case is available for everyone. Deposit throughout the day to open up each deposit-based case.
      </p>
    </div>
    <NuxtPicture
        :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: cover;'
      }"
        :src="`${ASSETS_IMAGES_PATH}rewards-banner-cases.png`"
        class="rewards-banner__image-wrapper"
        format="avif,webp,png"
    />
  </div>
</template>

<script lang="ts" setup>
import {ASSETS_IMAGES_PATH} from "~/constants/config";
</script>

<style lang="scss" scoped>
  @import './RewardsBanner';
</style>