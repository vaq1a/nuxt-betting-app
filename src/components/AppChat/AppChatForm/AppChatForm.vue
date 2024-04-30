<template>
  <div class="chat__chat-form chat-form">
    <AppChatTogglers class="chat-form__togglers" />
    <AppChatFormField />
    <AppChatRules />
    <NuxtPicture
        :imgAttrs="{
          style: 'width: 100%;height: 100%;object-fit: cover;'
        }"
        class="chat-form__snow chat-form__snow--left snow" format="avif,webp,png"
        src="/images/snow-1.png"
    />
    <NuxtPicture
        :imgAttrs="{
          style: 'width: 100%;height: 100%;object-fit: cover;'
        }"        class="chat-form__snow chat-form__snow--right snow" format="avif,webp,png"
        src="/images/snow-2.png"
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