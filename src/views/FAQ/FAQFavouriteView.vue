<template>
  <div class="favourite-box">
    <p>Hi from FAQFavouriteView</p>
    <div v-for="faq in getFavouriteFaqs" :key="faq.Question">
      <p>{{ faq.Question }}</p>
    </div>
  </div>
</template>

<script>
// import FAQSearchItem from "@/components/FAQSearchItem";
import { mapGetters } from "vuex";

export default {
  name: "FAQFavouriteView",
  components: {
    // FAQSearchItem
  },
  computed: {
    faqs() {
      return this.$store.state.faqs.data;
    },
    // mix the getters into computed with object spread operator
    ...mapGetters(["getFavouriteFaqs"])
  }
};
</script>

<style lang="scss">
.favourite-box {
  height: 400px;
  width: 400px;
}
</style>
