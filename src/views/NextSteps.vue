<template>
  <div class="next-steps">
    <h1>Next Steps</h1>
    <XpBar />
  </div>
</template>

<script>
import XpBar from "@/components/XpBar.vue";

export default {
  name: "NextSteps",
  components: {
    XpBar
  }
};
</script>

<style lang="scss">
h1 {
  color: $color-foreground;
}
</style>
