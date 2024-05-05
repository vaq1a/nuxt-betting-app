<template>
  <div class="wrapper__header-aside side-header">
    <NuxtLink
        :to="INDEX_PATH"
        class="side-header__link-logo">
      <AppLogotype size="sm" />
    </NuxtLink>
    <SideHeaderNavigation class="side-header__navigation" />
  </div>
</template>

<script lang="ts" setup>
import {INDEX_PATH} from "~/constants/config";
</script>

<style lang="scss" scoped>
  @import './SideHeader.scss';
</style>