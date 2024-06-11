<template>
  <AppUpgrade class="content__upgrade">
    <WinCards class="upgrade__win-cards" />
    <div class="upgrade__game">
      <PlaceBetForm class="upgrade__place-bet-form" />
      <AppTower class="upgrade__tower" />
      <SkinCard class="upgrade__skin-card" />
    </div>
  </AppUpgrade>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"]
})
</script>

<style lang="scss" scoped>
  @import './Index';
</style>