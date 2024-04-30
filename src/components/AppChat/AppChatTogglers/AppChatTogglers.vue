<template>
  <div class="togglers">
    <AppChatToggler
        v-for="toggler in CHAT_FLAGS"
        :key="toggler.id"
        :lang="toggler.lang"
    />
  </div>
</template>

<script lang="ts" setup>
import AppChatToggler from '~/components/AppChat/AppChatToggler/AppChatToggler.vue'
import {CHAT_FLAGS} from "~/constants/chatFlags";
</script>

<style lang="scss" scoped>
  @import './AppChatTogglers';
</style>