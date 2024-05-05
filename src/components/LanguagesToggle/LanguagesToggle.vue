<template>
  <div class="languages-toggle">
    <LanguageFlag
        class="languages-toggle__flag"
        lang="EN"
        size="md"
    />
    <span class="languages-toggle__lang">en</span>
    <IconLoader
        class="languages-toggle__icon"
        name="leftArrow"
    />
  </div>
</template>

<script lang="ts" setup>
import IconLoader from '~/components/IconLoader/IconLoader.vue';
</script>

<style lang="scss" scoped>
  @import './LanguagesToggle.scss';
</style>