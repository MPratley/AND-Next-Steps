<template>
  <div class="faq-header">
    <SearchInput :faqs="faqs" />
    <ui-tabs class="my-custom-tab-header" fullwidth>
      <ui-tab :key="tab.title" v-for="tab in tabs">
        <div slot="header">
          <ui-icon slot="icon"></ui-icon>
          <span>{{ tab.title }}</span>
        </div>
      </ui-tab>
    </ui-tabs>
  </div>
</template>

<script>
import SearchInput from "@/components/FAQSearchInput";
import { UiTabs, UiTab } from "keen-ui";

export default {
  name: "FAQSearchHeader",
  components: {
    SearchInput,
    UiTabs,
    UiTab
  },

  data() {
    return {
      tabs: [
        { title: "Category", icon: "" },
        { title: "Favourite", icon: "" },
        { title: "Popular", icon: "" }
      ]
    };
  }
};
</script>

<style lang="scss">
.faq-header {
  background: $and-red;
  position: fixed;
  top: 0;
  width: 100%;
}

.my-custom-tab-header {
  background: $and-red;
}
</style>
