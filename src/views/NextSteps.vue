<template>
  <div class="next-steps">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Next Steps</h1>
    <XP />
  </div>
</template>

<script>
import XP from "@/components/XpBar.vue";

export default {
  name: "next-steps",
  components: {
    XP
  }
};
</script>

<style lang="scss">
h1 {
  color: $color-foreground;
}
</style>
