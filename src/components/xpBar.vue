<template>
  <div class="xpParent">
    <div class="xpBar">
      <div class="userXp"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "XPBar",
  computed: {
    ...mapGetters(["user/getXp"])
  }
};
</script>

<style lang="scss" scoped></style>
