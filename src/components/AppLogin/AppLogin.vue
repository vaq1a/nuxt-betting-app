<template>
  <div class="login">
    <h3 class="login__title">Login</h3>
    <div class="login__form">
      <input
          v-model="user.email"
          class="login__input"
          placeholder="Enter Email"
          required
          type="email"
      />
      <input
          v-model="user.password"
          class="login__input"
          placeholder="Enter Password"
          required
          type="password"
      />
      <AppButton
          view="filled"
          @click.prevent="login"
      >
        Login
      </AppButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {EndPointsService} from "~/services/endPointsService";

const user = ref({
  email: '',
  password: '',
});

const login = async () => {
  if (!user.value.email || !user.value.password) {
    return
  }

  const { data, error } = await useCustomFetch(EndPointsService.externalLogin, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: {
      email: user.value.email,
      password: user.value.password,
    },
  })

  if (data) {
    await navigateTo('/')
  } else {
    console.error('Login error: ', error)
  }
};
</script>

<style lang="scss" scoped>
  @import './AppLogin';
</style>