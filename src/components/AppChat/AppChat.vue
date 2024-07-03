<template>
  <div class="layout__chat chat">
    <div class="chat__header">
      <h4 class="chat__title">
        {{ $t('liveChat') }}
      </h4>
      <p class="chat__users-count">
        35 {{ $t('online') }}
      </p>
    </div>
    <div class="chat__body">
      <AppChatMessage
          v-for="message in MESSAGES"
          :key="message.id"
          :message="message"
          class="chat__message"
      />
    </div>
    <AppChatForm/>
  </div>
</template>

<script lang="ts" setup>
import AppChatMessage from '~/components/AppChat/AppChatMessage/AppChatMessage.vue'
import AppChatForm from '~/components/AppChat/AppChatForm/AppChatForm.vue'
import {MESSAGES} from '~/constants/messages'
</script>

<style lang="scss" scoped>
  @import './AppChat';
</style>