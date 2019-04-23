<template>
  <div class="handy-andi-list">
    <h1>Your ANDi</h1>
    <div v-for="andi in handyAndi" :key="andi.email">
      <HandyANDiListItem :andi="andi" class="andi" />
    </div>
    <button
      class="mdc-fab new-andi-fab"
      @click="createNewAndi"
      :class="{ 'mdc-fab--extended': bigFab, 'new-andi-fab--big': bigFab }"
    >
      <span class="material-icons mdc-fab__icon">add</span>
      <span v-if="bigFab" class="mdc-fab__label">New Andi</span>
    </button>
  </div>
</template>

<script>
import HandyANDiListItem from "@/components/HandyANDiListItem";

export default {
  name: "HandyAndi",
  components: {
    HandyANDiListItem
  },
  computed: {
    handyAndi() {
      return this.$store.getters["user/getHandyAndi"];
    }
  },
  data() {
    return {
      bigFab: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    createNewAndi() {
      this.$router.push("/handy-andi/new");
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition === 0) {
        this.bigFab = true;
      } else {
        this.bigFab = false;
      }
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
.new-andi-fab {
  background-color: $color-accent;
  position: fixed;
  bottom: 90px;
  transform: translateX(120px);
}
.new-andi-fab--big {
  transform: translateX(-50%) !important;
}
</style>
