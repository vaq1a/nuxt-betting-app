<template>
  <NuxtPicture
      :imgAttrs="{
        style: 'width: 100%;height: 100%;object-fit: cover;'
      }"
      class="status-badge"
      format="avif,webp,png"
      src="/images/badge-default.png"
  />
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import './StatusBadge';
</style>