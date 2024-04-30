<template>
  <NuxtPicture
      :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: cover; border: 0.2rem solid hsl(226, 25%, 10%); border-radius: 50%;'
      }"
      class="chat-message-user-avatar" format="avif,webp,png"
      src="/images/avatar.png"
  />
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import './AppChatMessageUserAvatar';
</style>