<template>
  <NuxtPicture
      :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: cover; border: 0.2rem solid hsl(226, 25%, 10%); border-radius: 50%;'
      }"
      :src="`${ASSETS_IMAGES_PATH}avatar.png`" class="chat-message-user-avatar"
      format="avif,webp,png"
  />
</template>

<script lang="ts" setup>
import {ASSETS_IMAGES_PATH} from "~/constants/config";
</script>

<style lang="scss" scoped>
@import './AppChatMessageUserAvatar';
</style>