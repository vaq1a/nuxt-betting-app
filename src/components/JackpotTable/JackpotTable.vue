<template>
  <div class="jackpot-table">
    <div class="jackpot-table__row">
      <GameInfoCard class="jackpot-table__row-item" />
      <GameInfoCard class="jackpot-table__row-item" />
      <GameInfoCard class="jackpot-table__row-item" />
    </div>
    <div class="jackpot-table__body">
      <p class="jackpot-table__info-text">No players yet</p>
      <DecorativeSnow :imageIndex="16" class="jackpot-table__snow jackpot-table__snow--third" />
      <DecorativeSnow :imageIndex="17" class="jackpot-table__snow jackpot-table__snow--fourth" />
    </div>
    <DecorativeSnow :imageIndex="14" class="jackpot-table__snow jackpot-table__snow--first" />
    <DecorativeSnow :imageIndex="15" class="jackpot-table__snow jackpot-table__snow--second" />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  @import './JackpotTable.scss';
</style>