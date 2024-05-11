<template>
  <div
      :class="additionalClass"
      class="banners-slider-button"
  >
    <IconLoader
        class="banners-slider-button__icon"
        name="arrow"
    />
  </div>
</template>

<script lang="ts" setup>
import IconLoader from '~/components/IconLoader/IconLoader.vue';
import type {PropType} from "vue";

const props = defineProps({
    clickType: {
      type: String as PropType<'prev' | 'next'>,
      default: 'prev'
    }
  })

const { clickType } = toRefs(props)

const additionalClass = computed(() => ({
  [`banners-slider-button--${unref(clickType)}`]: Boolean(unref(clickType)),
}))

</script>

<style lang="scss" scoped>
  @import './BannersSliderButton.scss';
</style>