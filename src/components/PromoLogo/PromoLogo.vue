<template>
  <NuxtPicture
      :class="additionalClass"
      :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: cover;'
      }"
      :src="`${ASSETS_IMAGES_PATH}shark-logo.png`"
      class="promo-logo"
      format="avif,webp,png"
  />
</template>

<script lang="ts" setup>
import type {PropType} from "vue";
import {ASSETS_IMAGES_PATH} from "~/constants/config";

const props = defineProps({
  size: {
    type: String as PropType<'xs' | 'md'>
  }
})

const { size } = toRefs(props)

const additionalClass = computed(() => ({
  [`promo-logo--${unref(size)}`]: Boolean(unref(size))
}));
</script>

<style scoped>

</style>