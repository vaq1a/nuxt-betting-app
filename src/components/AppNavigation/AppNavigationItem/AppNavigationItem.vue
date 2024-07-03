<template>
  <li
      class="navigation-item"
  >
    <NuxtLink
        :to="localePath(item.path)"
        active-class="navigation-item__link--active"
        class="navigation-item__link"
    >
      <IconLoader
          :name="item.iconName"
          class="navigation-item__icon"
      />
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
import IconLoader from "~/components/IconLoader/IconLoader.vue";
import type {PropType} from "vue";
import type {NavigationItem} from "~/types/navigationItem";

const localePath = useLocalePath()

defineProps({
  item: {
    type: Object as PropType<NavigationItem>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
  @import './AppNavigationItem';
</style>