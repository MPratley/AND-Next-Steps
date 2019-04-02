<template>
  <div class="xpBarDiv">
    <p>Skill Level:</p>
    <div class="container">
      <div class="skills xp">{{ xp }}%</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "xp_bar",
  computed: {
    ...mapState({
      xp: state => state.xp
    })
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.container {
  width: 100%;
  background-color: $color-foreground;
}

.skills {
  text-align: right;
  padding: 10px;
  color: white;
}

.xp {
}
</style>
