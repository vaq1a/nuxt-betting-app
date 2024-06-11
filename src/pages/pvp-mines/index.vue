<template>
  <AppPvpMines class="content__pvp-mines">
    <GameInfoCards class="pvp-mines__info-cards" />
    <SectionTitle class="pvp-mines__title">Active games</SectionTitle>
    <SectionTitle class="pvp-mines__title">RECENT GAMES</SectionTitle>
    <GameCards class="pvp-mines__cards" />
  </AppPvpMines>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"]
})
</script>

<style lang="scss" scoped>
  @import './Index';
</style>