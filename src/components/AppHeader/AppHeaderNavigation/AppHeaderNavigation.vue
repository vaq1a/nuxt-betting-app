<template>
  <nav class="header-navigation">
    <ul class="header-navigation__list">
      <AppHeaderNavigationItem
          v-for="item in HEADER_NAVIGATION"
          :key="item.id"
          :item="item"
      />
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import {HEADER_NAVIGATION} from "~/constants/headerNavigation";
</script>

<style lang="scss" scoped>
  @import './AppHeaderNavigation.scss';
</style>