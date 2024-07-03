<template>
  <li
      class="side-header-navigation-item"
  >
    <NuxtLink
        :to="localePath(item.path)"
        active-class="side-header-navigation-item__link--active"
        class="side-header-navigation-item__link"
    >
      <IconLoader
          v-if="isRouteActive"
          :name="`${item.iconName}-active`"
          class="side-header-navigation-item__icon"
      />
      <IconLoader
          v-else
          :name="item.iconName"
          class="side-header-navigation-item__icon"
      />
      <span class="side-header-navigation-item__title">
              {{ item.title }}
          </span>
      <span
          v-if="item.price"
          class="side-header-navigation-item__price"
      >
              {{ item.price }}
          </span>
      <span
          v-if="item.label"
          class="side-header-navigation-item__label"
      >
              {{ item.label }}
          </span>
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
import IconLoader from "~/components/IconLoader/IconLoader.vue";
import type {PropType} from "vue";
import type {SideHeaderNavigationItem} from "~/types/SideHeaderNavigationItem";

const route = useRoute()
const localePath = useLocalePath()

const props = defineProps({
  item: {
    type: Object as PropType<SideHeaderNavigationItem>,
    required: true
  }
})

const { item } = toRefs(props)

const isRouteActive = computed(() => route.name === unref(item)?.path)
</script>

<style lang="scss" scoped>
  @import './SideHeaderNavigationItem';
</style>