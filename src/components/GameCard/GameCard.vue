<template>
  <div class="game-card">
    <div class="game-card__top">
      <div class="game-card__logotypes">
        <PromoLogo
            class="game-card__promo-logo"
            size="xs"
        />
        <PromoLogo
            class="game-card__promo-logo"
            size="xs"
        />
        <PromoLogo
            class="game-card__promo-logo"
            size="xs"
        />
      </div>
      <div class="game-card__stats">
        <div class="game-card__sun-stat">
          <PromoIcon class="game-card__promo-icon" />
          2
        </div>
        <div class="game-card__chip-stat">
          <PromoIcon class="game-card__promo-icon" />
          1000
        </div>
      </div>
    </div>
    <div class="game-card__bottom">
      <div class="game-card__info">
        <InfoLabel class="game-card__info-label" />
        <InfoLabel class="game-card__info-label" />
      </div>
      <AppButton
          class="game-card__button"
          view="transparent-light"
      >
        view
      </AppButton>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  @import './GameCard';
</style>