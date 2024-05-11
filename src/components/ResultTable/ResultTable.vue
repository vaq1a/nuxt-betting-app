<template>
  <div class="result-table">
    <ResultTableHeader class="result-table__header" />
    <ResultTableRow class="result-table__row" indentType="broad" />
    <ResultTableRow class="result-table__row" indentType="broad" />
    <ResultTableRow class="result-table__row" indentType="broad" />
    <ResultTableRow class="result-table__row" indentType="broad" />
    <DecorativeSnow :imageIndex="18" class="result-table__snow result-table__snow--first" />
    <DecorativeSnow :imageIndex="19" class="result-table__snow result-table__snow--second" />
    <DecorativeSnow :imageIndex="20" class="result-table__snow result-table__snow--third" />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  @import './ResultTable';
</style>