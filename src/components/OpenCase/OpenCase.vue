<template>
  <div
      :class="additionalClass"
      class="open-case"
  >
    <h3 class="open-case__title open-case__title--no-filter">
      {{ item.title }}
    </h3>
    <NuxtPicture
        :imgAttrs="{
        style: 'height: 100%; width: 100%; object-fit: contain; object-position: center;'
      }"
        :src="`${ASSETS_IMAGES_PATH}${item.imageName}.png`"
        class="open-case__image-wrapper open-case__image-wrapper--no-filter"
        format="avif,webp,png"
    />
    <div class="open-case__details open-case__details--no-filter">
      <IconLoader
          class="open-case__lock-icon"
          name="lock"
      />
      {{ item.footerText }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {PropType} from "vue";
import type {OpenCase} from "~/types/openCase";
import {ASSETS_IMAGES_PATH} from "~/constants/config";

const props = defineProps({
  item: {
    type: Object as PropType<OpenCase>,
    required: true
  }
})

const { item } = toRefs(props)

const additionalClass = computed(() => ({
  [`open-case--${unref(item.value.serialNumber)}`]: Boolean(unref(item.value.serialNumber)),
}))
</script>

<style lang="scss" scoped>
  @import './OpenCase';
</style>