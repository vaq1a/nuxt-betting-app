<template>
  <div class="upgrade__win-card win-card">
    <NuxtPicture
        :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: cover;'
      }"
        :src="`${ASSETS_IMAGES_PATH}upgrade-card-image.png`" class="win-card__image-wrapper"
        format="avif,webp,png"
    />
    <div class="win-card__overview">
      <p class="win-card__name">
        Black Hoodie
      </p>
      <div class="win-card__points">
        <PromoIcon class="win-card__points-promo-icon" />
        646
      </div>
    </div>
    <div class="win-card__state">
      <div class="win-card__status">
        <IconLoader class="win-card__status-icon" name="upgrade" />
        Upgraded
      </div>
      <span class="win-card__coefficient">
        X 1.32
      </span>
    </div>
    <DecorativeSnow :imageIndex="38" class="win-card__snow win-card__snow--first" />
    <DecorativeSnow :imageIndex="39" class="win-card__snow win-card__snow--second" />
  </div>
</template>

<script lang="ts" setup>

import {ASSETS_IMAGES_PATH} from "~/constants/config";
</script>

<style lang="scss" scoped>
  @import './WinCard';
</style>