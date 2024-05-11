<template>
  <div class="open-cases">
    <OpenCase
        v-for="item in OPEN_CASES"
        :key="item.id"
        :item="item"
        class="open-cases__item"
    />
  </div>
</template>

<script lang="ts" setup>
import OpenCase from '~/components/OpenCase/OpenCase.vue'
import {OPEN_CASES} from "~/constants/openCases";
</script>

<style lang="scss" scoped>
  @import './OpenCases';
</style>