<template>
  <div id="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/map">Map</router-link>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style lang="scss" scoped>
@import "@/styles/navbar.scss";
#navbar {
  @include bottom-nav($color-background, $color-foreground, $color-accent);
}
</style>
