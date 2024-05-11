<template>
  <div class="jackpot-drum">
    <JackpotDrumFoundation class="jackpot-drum__foundation" />
    <JackpotDrumRing class="jackpot-drum__ring" />
    <JackpotDrumContent class="jackpot-drum__content" />
    <DecorativeSnow :imageIndex="10" class="jackpot-drum__snow jackpot-drum__snow--first" />
    <DecorativeSnow :imageIndex="11" class="jackpot-drum__snow jackpot-drum__snow--second" />
    <DecorativeSnow :imageIndex="12" class="jackpot-drum__snow jackpot-drum__snow--third" />
    <DecorativeSnow :imageIndex="13" class="jackpot-drum__snow jackpot-drum__snow--fourth" />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  @import './JackpotDrum';
</style>