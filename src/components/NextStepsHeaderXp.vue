<template>
  <div class="xpBarDiv">
    <!-- <p class="xpCount">{{ getXp }}%</p> -->
    <div class="container">
      <div :style="{ width: getXp + '%' }" class="xpBar"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "XPBar",
  computed: {
    ...mapGetters(["getXp"])
  }
};
</script>

<style lang="scss" scoped>
.xpCount {
  text-align: right;
  margin-bottom: 4px;
}

.container {
  width: 100%;
  background-color: $color-foreground;
  border: none;
  border-radius: 200px;
  padding: 4px;
}

.xpBar {
  height: 12px;
  color: $color-foreground;
  background-color: $color-accent;
  border: none;
  border-radius: 200px;
}
</style>
