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
import {useQuery} from "@tanstack/vue-query";
import {axiosInstance} from "~/http/axios";

// const { data, error } = await useCustomFetch(EndPointsService.externalGetOpenCases)
// console.log('Global data: ', data.value)
// console.log('Global error: ', error.value)

const { data, error, suspense } = useQuery({
  queryKey: ["open-cases"],
  queryFn: async () => {
    const { data } = await axiosInstance.get('/rewards/open-cases')

    return data
  },
  select: (data) => data
})

onServerPrefetch(async () => {
    try {
      await suspense();
    } catch (e) {
      console.log('Running onServerPrefetch error:', e);
    }
  })

console.log('Global data: ', unref(data))
</script>

<style lang="scss" scoped>
  @import './OpenCases';
</style>