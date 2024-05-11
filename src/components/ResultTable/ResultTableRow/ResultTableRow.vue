<template>
  <div class="result-table-row">
    <div :class="additionalClass" class="result-table-row__cell">
      <div class="result-table-row__rivals">
        <PromoLogo class="result-table-row__rival-logo" size="md" />
        vs
        <PromoLogo class="result-table-row__rival-logo" size="md" />
      </div>
    </div>
    <div :class="additionalClass" class="result-table-row__cell">
      <p class="result-table-row__price">
        $ 745.91
      </p>
    </div>
    <div :class="additionalClass" class="result-table-row__cell">
      <p class="result-table-row__status">
        double down
      </p>
    </div>
    <div :class="additionalClass" class="result-table-row__cell">
      <PromoLogo class="result-table-row__chip" size="xs" />
    </div>
    <div :class="additionalClass" class="result-table-row__cell">
      <AppButton
          class="result-table-row__button"
          view="transparent-dark"
      >
        View outcome
      </AppButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {PropType} from "vue";

const props = defineProps({
  indentType: {
    type: String as PropType<'broad' | 'narrow'>,
    required: true
  }
})

const { indentType } = toRefs(props)

const additionalClass = computed(() => ({
  [`result-table-row__cell--${unref(indentType)}-indent`]: Boolean(unref(indentType)),
}))

</script>

<style lang="scss" scoped>
  @import './ResultTableRow';
</style>