<template>
  <AppPvpMines class="content__pvp-mines">
    <GameInfoCards class="pvp-mines__info-cards" />
    <SectionTitle class="pvp-mines__title">
      {{ $t('activeGames') }}
    </SectionTitle>
    <SectionTitle class="pvp-mines__title">
      {{ $t('recentGames') }}
    </SectionTitle>
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