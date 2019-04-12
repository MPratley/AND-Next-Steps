<template>
  <div class="search">
    <!-- <h2 class="faq-title">Hi, how can we help you today?</h2> -->
    <div class="faq-search-results" v-if="getSearchTerm !== ''">
      <h2>Results for "{{ getSearchTerm }}"</h2>
      <FAQSearchItem v-for="faq in getFilteredFaqs" :key="faq.id" :faq="faq" />
    </div>
    <div class="faq-popular" v-else>
      <h2 class="title">Popular Questions</h2>
      <FAQSearchItem v-for="faq in faqs" :key="faq.id" :faq="faq" />
    </div>
  </div>
</template>

<script>
import FAQSearchItem from "@/components/FAQSearchItem";
import { mapGetters } from "vuex";

export default {
  name: "Search",
  components: {
    FAQSearchItem
  },
  computed: {
    faqs() {
      return this.$store.state.faqs.data;
    },
    // mix the getters into computed with object spread operator
    ...mapGetters(["getSearchTerm", "getFilteredFaqs", "getFaqs"])
  },
  created() {
    this.$store.dispatch("faqs/openDBChannel");
  }
};
</script>

<style lang="scss">
.search {
  overflow: auto;
}

.faq-popular,
.faq-search-results {
  display: flex;
  flex-direction: column;
  padding: 0.1em;
  margin: 0.5em 1em 0.5em 0.5em;
  max-height: 70vh;
  /* overflow: auto; */
}

h2,
p,
a,
.faq-btn {
  font-family: "Poppins", sans-serif;
}

.faq-title {
  color: $and-blue;
  text-align: center;
  max-height: 9vh;
}

strong {
  color: $and-blue;
}

.faq-btn {
  background-color: $and-blue;
  color: #ffffff;
  height: 60px;
  width: 15em;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  font-size: 1.1em;
}
</style>
