<template>
  <NuxtPicture
      :class="additionalClass"
      :imgAttrs="{
        style: 'width: 100%;height: 100%;object-fit: cover;'
      }"
      :src="`${ASSETS_IMAGES_PATH}flag-${currentLang}.png`"
      class="togglers__flag flag"
      format="avif,webp,png"
  />
</template>

<script lang="ts" setup>
import type {PropType} from "vue";
import type {FlagSizes} from "~/types/flagSizes";
import type {ChatFlagLanguages} from "~/types/chatFlags";
import {ASSETS_IMAGES_PATH} from "~/constants/config";

const props = defineProps({
  size: {
    type: String as PropType<FlagSizes>,
    default: 'sm'
  },
  lang: {
    type: String as PropType<ChatFlagLanguages>,
    required: true,
  }
});

const {size, lang} = toRefs(props)

const additionalClass = computed(() => ({
  [`flag--${unref(size)}`]: Boolean(unref(size)),
}))

const currentLang = computed(() => unref(lang).toLowerCase())
</script>

<style lang="scss" scoped>
  @import './LanguageFlag';
</style>