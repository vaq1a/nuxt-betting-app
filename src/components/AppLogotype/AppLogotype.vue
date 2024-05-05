<template>
  <NuxtPicture
      :class="additionalClass"
      :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: cover;'
      }"
      :src="`${ASSETS_IMAGES_PATH}logotype-${currentSize}.png`"
      class="logotype"
      format="avif,webp,png"
  />
</template>

<script lang="ts" setup>
import type {PropType} from "vue";
import type {LogoSizes} from "~/types/logoSizes";
import {ASSETS_IMAGES_PATH} from "~/constants/config";

const props = defineProps({
  size: {
    type: String as PropType<LogoSizes>,
    required: true
  }
})

const { size } = toRefs(props)
const additionalClass = computed(() => ({
  [`logotype--${unref(size)}`]: Boolean(unref(size)),
}))
const currentSize = computed(() => unref(size))
</script>

<style lang="scss" scoped>
  @import './AppLogotype.scss';
</style>