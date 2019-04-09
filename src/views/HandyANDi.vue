<template>
  <div class="handy-andi-list">
    <h1>Your ANDi</h1>
    <div v-for="andi in handyAndi" :key="andi.email">
      <HandyANDiListItem :andi="andi" />
    </div>
  </div>
</template>

<script>
import HandyANDiListItem from "@/components/HandyANDiListItem";

export default {
  name: "faq",
  components: {
    HandyANDiListItem
  },
  computed: {
    handyAndi() {
      return this.$store.getters["user/getHandyAndi"];
    }
  }
};
</script>

<style lang="scss">
.handy-andi-list {
  text-align: center;
}
h1 {
  color: $color-foreground;
}
#AddNewAndi {
  border: 2px dashed grey;
  width: 90%;
  margin: 0 auto;
  height: 100px;
}
</style>
