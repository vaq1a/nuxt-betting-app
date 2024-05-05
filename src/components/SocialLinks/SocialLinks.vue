<template>
  <div class="social-links">
    <a class="social-links__link" href="#">
      <IconLoader
          class="social-links__icon"
          name="discord"
      />
    </a>
    <a class="social-links__link" href="#">
      <IconLoader
          class="social-links__icon"
          name="twitter"
      />
    </a>
  </div>
</template>

<script lang="ts" setup>
import IconLoader from '~/components/IconLoader/IconLoader.vue';
</script>

<style lang="scss" scoped>
  @import './SocialLinks.scss';
</style>