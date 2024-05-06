<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <AppNavigationItem
          v-for="item in NAVIGATION"
          :key="item.id"
          :item="item"
      />
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import {NAVIGATION} from "~/constants/navigation";
</script>

<style lang="scss" scoped>
  @import './AppNavigation.scss';
</style>