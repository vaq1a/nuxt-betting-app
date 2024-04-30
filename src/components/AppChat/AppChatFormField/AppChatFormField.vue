<template>
  <div class="chat-form-field">
    <textarea class="chat-form-field__textarea"></textarea>
    <AppChatSmiles class="chat-form-field__smiles-trigger" />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  .chat-form-field {
    display: flex;
    position: relative;

    &__textarea {
      border: 1px solid $color-accent-20;
      border-radius: 0.4rem;
      background-color: $color-accent-65;
      resize: none;
      width: 100%;
      height: 4.8rem;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.5;
      color: $color-light;
      padding: 1rem 4.8rem 1rem 1rem;
    }

    &__smiles-trigger {
      position: absolute;
      right: 1.6rem;
      top: calc(50% - 1.1rem);
    }
  }
</style>