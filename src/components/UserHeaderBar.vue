<template>
  <div class="userHeaderBar"></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user/getUserName"])
  }
};
</script>

<style lang="scss" scoped>
.userHeaderBar {
  width: 100%;
  height: fit-content;
}
</style>
