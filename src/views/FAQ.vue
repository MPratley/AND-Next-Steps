<template>
  <div class="faq">
    <div id="tabs">
      <!-- <router-link to="/faq/search">Search</router-link>
      <router-link to="/faq/catagory">Catagory</router-link>
      <router-link to="/faq/favourites">Favorites</router-link>-->
    </div>
    <router-view />

    <FAQSearchHeader />
  </div>
</template>

<script>
import FAQSearchHeader from "@/components/FAQSearchHeader";
export default {
  name: "Faq",
  components: {
    FAQSearchHeader
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/navbar.scss";
#tabs {
  @include bottom-nav(
    $color-background,
    $color-accent,
    $color-foreground,
    true
  );
}
.faq {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
