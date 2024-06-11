<template>
  <div class="sky-point">
    <span
        :class="additionalClass"
        class="sky-point__number"
    >
      21.1
    </span>
    <IconLoader
        :name="currentIcon"
        class="sky-point__icon"
    />
  </div>
</template>

<script lang="ts" setup>
import type {PropType} from "vue";
import type {SkyPointDispositions} from "~/types/skyPointDispositions";

const props = defineProps({
    currentDisposition: {
      type: String as PropType<SkyPointDispositions>,
      required: true
    }
  })

const { currentDisposition } = toRefs(props)
const additionalClass = computed(() => ({
  [`sky-point__number--${unref(currentDisposition)}`]: Boolean(unref(currentDisposition))
}))

const currentIcon = computed(() => {
  if (!Boolean(unref(currentDisposition))) {
    console.log('default')
    return 'paperBlue'
  }

  if (unref(currentDisposition) === 'between') {
    console.log('between')
    return 'paperPink'
  }

  if (unref(currentDisposition) === 'extreme') {
    console.log('extreme')
    return 'paperRed'
  }
  console.log('paperBlue')
  return  'paperBlue'
})
console.log('currentIcon', unref(currentIcon))
</script>

<style lang="scss" scoped>
  @import './AppSkyPoint';
</style>