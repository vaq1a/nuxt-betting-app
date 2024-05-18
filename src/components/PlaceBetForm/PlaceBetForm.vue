<template>
  <div class="place-bet-form">
    <PlaceBetFormSection />
    <AppButton
        class="place-bet-form__button"
        view="filled"
    >
      place bet
    </AppButton>
    <PlaceBetFormLimit />
    <DecorativeSnow
        :imageIndex="27"
        class="place-bet-form__snow place-bet-form__snow--fourth"
    />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  @import './PlaceBetForm';
</style>