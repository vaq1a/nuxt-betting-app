<template>
  <h2 :class="additionalClass" class="block-title">
    <slot />
  </h2>
</template>

<script lang="ts" setup>
import type {PropType} from "vue";

const props = defineProps({
  view: {
    type: String as PropType<'yellow' | 'white'>,
    default: 'white'
  }
})

const { view } = toRefs(props)

const additionalClass = computed(() => ({
  [`block-title--${unref(view)}`]: Boolean(unref(view))
}))

</script>

<style lang="scss" scoped>
  @import './BlockTitle';
</style>