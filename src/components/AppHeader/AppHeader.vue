<template>
  <header class="header">
    <SocialLinks class="header__social-links" />
    <AppHeaderNavigation class="header__navigation" />
    <AuthLogout class="header__auth-logout-button" />
  </header>
</template>

<script lang="ts" setup>
import SocialLinks from '~/components/SocialLinks/SocialLinks.vue';
import AppHeaderNavigation from '~/components/AppHeader/AppHeaderNavigation/AppHeaderNavigation.vue';
</script>

<style lang="scss" scoped>
  @import './AppHeader';
</style>