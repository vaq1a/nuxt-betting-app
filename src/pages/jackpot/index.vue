<template>
  <AppJackpot class="content__jackpot">
    <JackpotDrum class="jackpot__drum" />
    <JackpotHash class="jackpot__hash" />
    <JackpotTable class="jackpot__table" />
  </AppJackpot>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"]
})
</script>

<style lang="scss" scoped>
 @import './Index';
</style>