<template>
  <div class="xp-bar-div">
    <p class="xp-count">{{ xp }}%</p>
    <div class="container">
      <div :style="{ width: xp + '%' }" class="xp-bar"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "XpBar",
  computed: {
    ...mapState({
      xp: state => state.xp
    })
  }
};
</script>

<style lang="scss" scoped>
.xp-count {
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

.xp-bar {
  height: 12px;
  text-align: right;
  color: $color-foreground;
  font-weight: 800;
  font-size: 12px;
  background-color: $color-accent;
  border-radius: 200px;
}
</style>
