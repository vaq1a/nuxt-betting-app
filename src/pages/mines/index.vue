<template>
  <AppMines class="content__mines">
    <MinesSlots class="mines__slots" />
    <PlaceBetForm class="mines__place-bet-form" />
  </AppMines>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"]
})
</script>

<style lang="scss" scoped>
  @import './Index';
</style>