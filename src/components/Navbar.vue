<template>
  <div id="navbar">
    <router-link to="/">
      <i class="material-icons">view_list</i>
      Next Steps
    </router-link>
    <router-link to="/faq">
      <i class="material-icons">question_answer</i>
      FAQ
    </router-link>
    <router-link to="/handy-andi">
      <i class="material-icons">account_box</i>
      Your ANDi
    </router-link>
    <!-- <router-link to="/map">
      <i class="material-icons">map</i>
      Map
    </router-link> -->
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
  @include bottom-nav($color-background, $color-accent, $color-foreground);
}
</style>
