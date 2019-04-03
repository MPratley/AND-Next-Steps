<template>
  <div class="faq">
    <!-- <h1>faq</h1> -->
    <Search />
  </div>
</template>

<script>
import Search from "@/components/Search";

export default {
  name: "faq",
  components: {},
  created() {
    this.$store.dispatch("tasks/openDBChannel");
  }
};
</script>

<style lang="scss">
h1 {
  color: $color-foreground;
  text-align: center;
}

.faq {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
