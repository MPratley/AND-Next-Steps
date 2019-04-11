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
        @select="checkTheThing"
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
        { id: 1, name: "Search", route: `/faq/search` },
        { id: 2, name: "Category", route: `/faq/category` },
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
    // mix the getters into computed with object spread operator
    ...mapGetters(["getFaqs", "getFilteredFaqs"])
  },
  methods: {
    checkTheThing: function(selectedTabId) {
      let chosenTab = this.tabs.find(tab => tab.id == selectedTabId);
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

.ui-tabs--text-color-active-primary .ui-tab-header-item.is-active {
  color: #ffffff;
}

.ui-tabs--background-color-default .ui-tabs__header {
  background-color: $and-red;
}

.ui-tabs--indicator-color-primary .ui-tab-header-item::after {
  background-color: #ffffff;
}
</style>
