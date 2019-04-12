<template>
  <div id="TheBottomNavBar">
    <router-link to="/next-steps">
      <i class="material-icons">view_list</i>
      Next Steps
    </router-link>
    <router-link to="/faq">
      <i class="material-icons">question_answer</i>
      FAQ
    </router-link>
    <router-link to="/handy-andi">
      <i class="material-icons">supervisor_account</i>
      Handy ANDi
    </router-link>
    <!-- <router-link to="/map">
      <i class="material-icons">map</i>
      Map
    </router-link> -->
  </div>
</template>

<script>
export default {
  name: "TheBottomNavBar"
};
</script>

<style lang="scss" scoped>
@import "@/styles/navbar.scss";
#TheBottomNavBar {
  @include bottom-nav($color-background, $color-accent, $color-foreground);
}
</style>
