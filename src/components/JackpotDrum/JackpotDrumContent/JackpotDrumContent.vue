<template>
  <div class="jackpot-drum-content">
    <div class="jackpot-drum-content__time">
      00:00
    </div>
    <div class="jackpot-drum-content__chips">
      <PromoIcon class="jackpot-drum-content__promo-icon" />
      0
    </div>
    <AppButton
        class="jackpot-drum-content__button"
        view="filled"
    >
      Deposit
    </AppButton>
  </div>
</template>

<script lang="ts" setup>
import AppButton from '~/components/AppButton/AppButton.vue'
</script>

<style lang="scss" scoped>
  @import './JackpotDrumContent';
</style>