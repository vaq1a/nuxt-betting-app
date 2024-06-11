<template>
  <AppLogin />
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: 'login',
    middleware: ["auth"]
  })
</script>

<style lang="scss" scoped>
  @import './Index';
</style>