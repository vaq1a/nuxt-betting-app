<template>
  <AppCoinflip class="content__coinflip">
    <GameInfoCards class="coinflip__game-info-cards" />
    <PreviousGames class="coinflip__previous-games" />
    <ResultTable class="coinflip__table" />
  </AppCoinflip>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"]
})
</script>

<style lang="scss" scoped>
  @import './Index';
</style>