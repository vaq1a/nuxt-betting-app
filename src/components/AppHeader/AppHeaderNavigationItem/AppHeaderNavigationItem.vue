<template>
  <li class="header-navigation-item">
    <NuxtLink
        :to="localePath(item.path)"
        active-class="header-navigation-item__link--active"
        class="header-navigation-item__link"
    >
      {{ item.title }}
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
import type {PropType} from "vue";
import type {HeaderNavigationItem} from "~/types/headerNavigationItem";

const localePath = useLocalePath()

defineProps({
  item: {
    type: Object as PropType<HeaderNavigationItem>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
  @import './AppHeaderNavigationItem.scss';
</style>