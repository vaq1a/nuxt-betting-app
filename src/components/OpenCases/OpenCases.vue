<template>
  <div class="open-cases">
    <OpenCase
        v-for="item in OPEN_CASES"
        :key="item.id"
        :item="item"
        class="open-cases__item"
    />
    <div v-for="item in data" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script lang="ts" setup>
import OpenCase from '~/components/OpenCase/OpenCase.vue'
import {OPEN_CASES} from "~/constants/openCases";
import {EndPointsService} from "~/services/endPointsService";

const { data, error } = await useCustomFetch(EndPointsService.externalGetOpenCases)

console.log('Global data: ', data.value)
console.log('Global error: ', error.value)
</script>

<style lang="scss" scoped>
  @import './OpenCases';
</style>