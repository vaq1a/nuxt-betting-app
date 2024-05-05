<template>
  <nav class="side-header-navigation">
    <ul class="side-header-navigation__list">
      <li
          v-for="item in SIDE_HEADER_NAVIGATION"
          :key="item.id"
          class="side-header-navigation__item"
      >
        <NuxtLink
            :to="item.path"
            class="side-header-navigation__link"
        >
          <IconLoader
              :name="item.iconName"
              class="side-header-navigation__icon"
          />
          <span class="side-header-navigation__title">
              {{ item.title }}
          </span>
          <span
              v-if="item.price"
              class="side-header-navigation__price"
          >
              {{ item.price }}
          </span>
          <span
              v-if="item.label"
              class="side-header-navigation__label"
          >
              {{ item.label }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import IconLoader from '~/components/IconLoader/IconLoader.vue';
import {SIDE_HEADER_NAVIGATION} from "~/constants/sideHeaderNavigation";
</script>

<style lang="scss" scoped>
  @import './SideHeaderNavigation.scss';
</style>