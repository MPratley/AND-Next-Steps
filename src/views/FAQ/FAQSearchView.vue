<template>
  <div class="search">
    <h2 class="title">
      Hi, how can we help you today?
    </h2>
    <SearchInput :faqs="faqs" />
    <div class="faq-popular">
      <h2>Popular FAQs</h2>
      <ol>
        <FAQItem v-for="faq in faqs"
:key="faq.id" :faq="faq" />
      </ol>
    </div>
    <!-- <button class="faq-btn" id="faq-all">Browse FAQs by Category</button>
    <button class="faq-btn" id="faq-fav">View favourite FAQs</button>-->
  </div>
</template>

<script>
import SearchInput from "@/components/FAQSearchInput";
import FAQItem from "@/components/FAQSearchItem";

export default {
  name: "Search",
  components: {
    SearchInput,
    FAQItem
  },
  computed: {
    faqs() {
      return this.$store.state.faqs.data;
    }
  },
  created() {
    this.$store.dispatch("faqs/openDBChannel");
  }
};
</script>

<style lang="scss">
.search {
  justify-content: center;
}

.faq-popular {
  display: flex;
  flex-direction: column;
  border: 0.1em solid lightgray;
  border-radius: 7px;
  width: 80%;
  padding: 1.7em;
  margin: 0.5em 1em 0.5em 0.5em;
  max-height: 40vh;
  overflow: scroll;
}

h2,
p,
a,
.faq-btn {
  font-family: "Poppins", sans-serif;
  // text-align: center;
}

.title {
  text-align: center;
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
