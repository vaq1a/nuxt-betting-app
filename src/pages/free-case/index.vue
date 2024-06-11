<template>
  <AppRewards class="content__rewards">
    <RewardsBanner class="rewards__banner" />
    <BlockTitle class="rewards__block-title">
      OPEN CASES
    </BlockTitle>
    <OpenCases class="rewards__open-cases" />
  </AppRewards>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"]
})
</script>

<style lang="scss" scoped>
  @import './Index';
</style>