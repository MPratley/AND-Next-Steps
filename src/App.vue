<template>
  <div id="app">
    <div v-if="isAuth" id="view">
      <router-view />
      <TheBottomNavBar />
    </div>
    <div v-else id="login">
      <Login />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import TheBottomNavBar from "@/components/TheBottomNavBar.vue";
import Login from "@/components/Login.vue";

export default {
  components: {
    TheBottomNavBar,
    Login
  },
  computed: {
    ...mapState({
      isAuth: state => state.isAuth
    })
  }
};
</script>

<style lang="scss">
html,
body,
#app,
#view,
#login {
  height: 100%;
}
body {
  margin: 0px;
}
</style>
