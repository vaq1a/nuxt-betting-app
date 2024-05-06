<template>
  <nav class="side-header-navigation">
    <ul class="side-header-navigation__list">
      <SideHeaderNavigationItem
          v-for="item in SIDE_HEADER_NAVIGATION"
          :key="item.id"
          :item="item"
      />
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import SideHeaderNavigationItem from '~/components/SideHeader/SideHeaderNavigationItem/SideHeaderNavigationItem.vue';
import {SIDE_HEADER_NAVIGATION} from "~/constants/sideHeaderNavigation";
</script>

<style lang="scss" scoped>
  @import './SideHeaderNavigation.scss';
</style>