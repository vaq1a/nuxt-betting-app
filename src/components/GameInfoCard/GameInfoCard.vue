<template>
  <div
    :class="additionalClass"
    class="game-info-card"
  >
    <PromoIcon v-if="!isAction" class="game-info-card__promo-icon" />
    <div v-if="!isAction" class="game-info-card__content">
      <p class="game-info-card__count">13,120</p>
      <p class="game-info-card__title">Total amount</p>
    </div>
    <AppButton
        v-if="isAction"
        class="game-info-cards-item__button button--full-width"
        view="filled"
    >
      Create a game
    </AppButton>
  </div>
</template>

<script lang="ts" setup>
import AppButton from '~/components/AppButton/AppButton.vue'

const props = defineProps({
    isAction: {
      type: Boolean,
      default: false
    }
  })

const { isAction } = toRefs(props)

const additionalClass = computed(() => ({
  'game-info-card--action-button': Boolean(unref(isAction))
}))
</script>

<style lang="scss" scoped>
  @import './GameInfoCard';
</style>