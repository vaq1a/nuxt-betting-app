<template>
  <div
      :class="additionalClass"
      class="toggler"
      @click="setActiveChatLang(lang)"
  >
    <LanguageFlag :lang="lang" />
    {{ lang }}
  </div>
</template>

<script lang="ts" setup>
import LanguageFlag from "~/components/LanguageFlag/LanguageFlag.vue";
import type {ChatFlagLanguages} from "~/types/chatFlags";
import type {PropType} from "vue";
import {getActiveChatLang, store} from "~/constants/store";

const props = defineProps({
  lang: {
    type: String as PropType<ChatFlagLanguages>,
    required: true
  }
})

const { lang } = toRefs(props)

const { setActiveChatLang } = store

const additionalClass = computed(() => ({
  'toggler--active': unref(lang) === unref(getActiveChatLang)
}))
</script>

<style lang="scss" scoped>
  @import './AppChatToggler';
</style>