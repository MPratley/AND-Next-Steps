<template>
  <div>
    <div v-if="isAuth" id="app">
      <router-view />
      <Navbar />
    </div>
    <div v-else id="login">
      <Login />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Navbar from "@/components/Navbar.vue";
import Login from "@/components/Login.vue";

export default {
  components: {
    Navbar,
    Login
  },
  computed: {
    ...mapState({
      isAuth: state => state.isAuth
    })
  }
};
</script>
