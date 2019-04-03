<template>
  <div id="app">
    <router-view />
    {{ msg }}
    <Navbar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>
