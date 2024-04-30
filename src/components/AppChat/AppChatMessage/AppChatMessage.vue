<template>
  <div class="message">
    <AppChatMessageUserAvatar class="message__user-avatar" />
    <div class="message__body">
      <div class="message__header">
        <StatusBadge class="message__status-badge" />
        <div class="message__username">{{ message.userName }}</div>
      </div>
      <div class="message__text">
        {{ message.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import StatusBadge from '~/components/StatusBadge/StatusBadge.vue'
import AppChatMessageUserAvatar from '~/components/AppChat/AppChatMessageUserAvatar/AppChatMessageUserAvatar.vue'
import type {Message} from "~/types/message";
import type {PropType} from "vue";

defineProps({
   message: {
     type: Object as PropType<Message>,
     required: true,
  },
})
</script>

<style lang="scss" scoped>
  @import './AppChatMessage';
</style>