<template>
  <div class="hamburger">
    <AppHamburgerLine class="hamburger__item" />
    <AppHamburgerLine class="hamburger__item" />
    <AppHamburgerLine class="hamburger__item" />
  </div>
</template>

<script lang="ts" setup>
import AppHamburgerLine from '~/components/AppHamburger/AppHamburgerLine/AppHamburgerLine.vue'
</script>

<style lang="scss" scoped>
  @import './AppHamburger.scss';
</style>