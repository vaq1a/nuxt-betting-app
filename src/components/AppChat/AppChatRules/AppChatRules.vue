<template>
  <div class="chat-form__rules rules">
    Chat rules
    <IconLoader
        class="rules__icon"
        name="questionInCircle"
    />
  </div>
</template>

<script lang="ts" setup>
import IconLoader from '~/components/IconLoader/IconLoader.vue';
</script>

<style lang="scss" scoped>
  @import './AppChatRules';
</style>