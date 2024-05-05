<template>
  <NuxtPicture
      :imgAttrs="{
          style: 'width: 100%;height: 100%;object-fit: cover;'
        }"
      :src="`${ASSETS_IMAGES_PATH}snow-${currentImageIndex}.png`"
      class="snow"
      format="avif,webp,png"
  />
</template>

<script lang="ts" setup>
import {ASSETS_IMAGES_PATH} from "~/constants/config";
import type {PropType} from "vue";
import type {SnowImageIndexes} from "~/types/snowImageIndexes";

const props = defineProps({
  imageIndex: {
    type: Number as PropType<SnowImageIndexes>,
    required: true
  }
})

const { imageIndex } = toRefs(props)
const currentImageIndex = computed(() => unref(imageIndex))
</script>

<style lang="scss" scoped>
  @import './DecorativeSnow.scss';
</style>