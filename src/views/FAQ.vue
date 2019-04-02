<template>
  <div class="faq">
    <h1>faq</h1>
    <Button />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "faq",
  components: {
    Button
  }
};
</script>

<style lang="scss">
h1 {
  color: $color-foreground;
}
</style>
