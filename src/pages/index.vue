<template>
  <BannersSlider class="content__banners-slider" />
  <PromoBanners class="content__promo-banners" />
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"]
})
</script>

<style lang="scss" scoped>
  @import './Index';
</style>