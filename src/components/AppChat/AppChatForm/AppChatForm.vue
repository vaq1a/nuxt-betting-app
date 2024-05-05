<template>
  <div class="chat__chat-form chat-form">
    <AppChatTogglers class="chat-form__togglers" />
    <AppChatFormField />
    <AppChatRules />
    <DecorativeSnow
        :image-index="1"
        class="chat-form__snow chat-form__snow--left"
    />
    <DecorativeSnow
        :image-index="2"
        class="chat-form__snow chat-form__snow--right"
    />
  </div>
</template>

<script lang="ts" setup>
import AppChatTogglers from '~/components/AppChat/AppChatTogglers/AppChatTogglers.vue'
import AppChatRules from '~/components/AppChat/AppChatRules/AppChatRules.vue'
</script>

<style lang="scss" scoped>
  @import './AppChatForm';
</style>