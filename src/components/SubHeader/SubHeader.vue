<template>
  <div class="sub-header">
    <NuxtLink
        :to="INDEX_PATH"
        class="sub-header__link-logo">
      <AppLogotype
          class="sub-header__logo"
          size="md"
      />
    </NuxtLink>
    <AppNavigation class="sub-header__navigation" />
    <div class="sub-header__actions">
      <LanguagesToggle class="sub-header__languages-toggle" />
      <AppHamburger class="sub-header__hamburger" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppNavigation from '~/components/AppNavigation/AppNavigation.vue'
import AppHamburger from "~/components/AppHamburger/AppHamburger.vue";
import LanguagesToggle from "~/components/LanguagesToggle/LanguagesToggle.vue";
import AppLogotype from "~/components/AppLogotype/AppLogotype.vue";
import {INDEX_PATH} from "~/constants/config";
</script>

<style lang="scss" scoped>
  @import 'SubHeader';
</style>