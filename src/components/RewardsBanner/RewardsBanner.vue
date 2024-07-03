<template>
  <div class="rewards-banner">
    <div class="rewards-banner__content">
      <h3 class="rewards-banner__title">
        {{ $t('dailyCases') }}
      </h3>
      <p class="rewards-banner__description">
        {{ $t('dailyCasesDescription') }}
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