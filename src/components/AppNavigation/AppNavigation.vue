<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
          v-for="item in NAVIGATION"
          :key="item.id"
          class="navigation__item"
      >
        <NuxtLink
            :to="item.path"
            active-class="navigation__link--active"
            class="navigation__link"
        >
          <IconLoader
              :name="item.iconName"
              class="navigation__icon"
          />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import IconLoader from '~/components/IconLoader/IconLoader.vue';
import {NAVIGATION} from "~/constants/navigation";
</script>

<style lang="scss" scoped>
  @import './AppNavigation.scss';
</style>