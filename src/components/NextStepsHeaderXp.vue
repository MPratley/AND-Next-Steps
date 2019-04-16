<template>
  <div class="xpBarDiv">
    <!-- <p class="xpCount">{{ getXp }}%</p> -->
    <div :style="{ width: getXp + '%' }" class="xpBar"></div>
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

.xpBarDiv {
  width: 100%;
  height: fit-content;
  border: none;
}

.xpBar {
  background-color: $and-purple;
  height: 20px;
}
</style>
