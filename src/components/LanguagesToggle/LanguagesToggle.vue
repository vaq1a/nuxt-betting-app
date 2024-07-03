<template>
  <div class="languages-toggle">
    <LanguageFlag
        :lang="language as ChatFlagLanguages"
        class="languages-toggle__flag"
        size="md"
    />
    <span class="languages-toggle__lang">
      {{ language }}
    </span>
    <select v-model="language">
      <option
          v-for="item in locales"
          :key="item.code"
          :value="item.code"
      >
        {{ item.code }}
      </option>
    </select>
<!--    <IconLoader-->
<!--        class="languages-toggle__icon"-->
<!--        name="leftArrow"-->
<!--    />-->
  </div>
</template>

<script lang="ts" setup>

import type {ChatFlagLanguages} from "~/types/chatFlags";

const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<style lang="scss" scoped>
  @import './LanguagesToggle.scss';
</style>