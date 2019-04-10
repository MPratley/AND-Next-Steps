<template>
  <div class="handy-andi-list">
    <h1>Your ANDi</h1>
    <div v-for="andi in handyAndi" :key="andi.email">
      <HandyANDiListItem :andi="andi" class="andi" />
    </div>
    <button class="mdc-fab mdc-fab--extended new-andi">
      <span class="material-icons mdc-fab__icon">add</span>
      <span class="mdc-fab__label">New Andi</span>
    </button>
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
@import "@material/fab/mdc-fab";

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

.andi {
  margin-bottom: 8px;
}

.new-andi {
  background-color: $color-accent;
  position: absolute;
  bottom: 100px;
  transform: translateX(-50%);
}
</style>
