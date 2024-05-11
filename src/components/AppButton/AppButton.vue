<template>
  <button
      :class="additionalClass"
      class="button"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import type {PropType} from "vue";
import type {ButtonView} from "~/types/buttonView";

const props = defineProps({
  view: {
    type: String as PropType<ButtonView>
  }
})

const { view } = toRefs(props)

const additionalClass = computed(() => ({
  [`button--${unref(view)}`]: Boolean(unref(view)),
}))

</script>

<style lang="scss" scoped>
  @import './AppButton';
</style>