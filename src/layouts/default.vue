<template>
  <AppLayout>
    <AppMain class="layout__main">
      <AppHeader class="main__header" />
      <AppMainWrapper class="main__wrapper">
        <SideHeader class="wrapper__side-header" />
        <AppMainContent class="wrapper__content">
          <SubHeader class="content__sub-header" />
          <div class="content__main-part">
            <slot />
          </div>
        </AppMainContent>
      </AppMainWrapper>
    </AppMain>
    <AppChat class="layout__chat" />
  </AppLayout>
</template>

<script lang="ts" setup>
import AppLayout from '~/components/AppLayout/AppLayout.vue'
import AppMain from '~/components/AppMain/AppMain.vue'
import AppMainWrapper from '~/components/AppMain/AppMainWrapper/AppMainWrapper.vue'
import AppMainContent from '~/components/AppMain/AppMainContent/AppMainContent.vue'
import AppChat from '~/components/AppChat/AppChat.vue'
import AppHeader from '~/components/AppHeader/AppHeader.vue'
import SubHeader from '~/components/SubHeader/SubHeader.vue'
import SideHeader from '~/components/SideHeader/SideHeader.vue'
</script>

<style lang="scss" scoped>
  @import "./Default.scss";
</style>