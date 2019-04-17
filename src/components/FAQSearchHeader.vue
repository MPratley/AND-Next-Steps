<template>
  <div class="faq-header">
    <SearchInput :faqs="getFaqs" />
    <ui-tabs color="primary" id="my-custom-tab-header" raised fullwidth>
      <ui-tab
        v-for="tab in tabs"
        :id="tab.id + ''"
        ref="tab.id"
        :key="tab.id + ''"
        color="primary"
        :to="tab.route"
        @select="changeTheTab"
      >
        <div slot="header">
          <span>{{ tab.name }}</span>
        </div>
      </ui-tab>
    </ui-tabs>
    <router-view />
  </div>
</template>

<script>
import SearchInput from "@/components/FAQSearchInput";
import { UiTabs, UiTab } from "keen-ui";
import { mapGetters } from "vuex";
export default {
  name: "FAQSearchHeader",
  data() {
    return {
      tabs: [
        { id: 1, name: "Categories", route: `/faq/category` },
        { id: 2, name: "Search", route: `/faq/search` },
        { id: 3, name: "Favourites", route: `/faq/favourites` }
      ]
    };
  },
  components: {
    SearchInput,
    UiTabs,
    UiTab
  },
  computed: {
    ...mapGetters(["getFaqs", "getFilteredFaqs"])
  },
  methods: {
    changeTheTab: function(selectedTabId) {
      let chosenTab = this.tabs.find(tab => tab.id == selectedTabId);
      this.$store.dispatch("resetSearch");
      this.$router.push(`${chosenTab.route}`);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
@import "node_modules/keen-ui/dist/keen-ui";

.faq-header {
  font-family: "Poppins", sans-serif;
  background-color: $and-red;
  position: fixed;
  top: 0;
  width: 100%;
  height: 15%;
}

.ui-tabs__body {
  display: none;
}

.ui-tabs {
  /* margin-top: 1.5rem; */
  width: 100%;
}

.ui-tabs--text-color-active-primary .ui-tab-header-item.is-active {
  color: #ffffff;
}

.ui-tabs--background-color-default .ui-tabs__header {
  background-color: $and-red;
}

.ui-tabs--text-color-black .ui-tab-header-item {
  color: rgba(255, 255, 255, 0.7);
}

.ui-tabs--indicator-color-primary .ui-tab-header-item::after {
  background-color: #ffffff;
}
</style>
