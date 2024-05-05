<template>
  <component :is="icon" />
</template>

<script lang="ts" setup>
import type {AsyncComponentLoader, Component} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const { name } = toRefs(props)

const icons = import.meta.glob("~/assets/icons/*.svg")

const icon = computed(() => {
  return defineAsyncComponent({
    loader: () => {
      return icons[`/assets/icons/${props.name}.svg`]() as Promise<AsyncComponentLoader<Component>>
    },
    // loadingComponent: LoadingComponent
  })
})
</script>

<style lang="scss" scoped>

</style>