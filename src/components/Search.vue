<template>
  <div class="search">
    <h2 class="title">How can we help you today?</h2>
    <SearchInput/>
    <div class="faq-popular">
      <h2>Popular FAQs</h2>
      <ol>
          <FAQItem v-for="faq in faqs"
          :faq="faq" 
          :key="faq.id"/>

          <!-- <li vi-if="faq-data" v-for="(faq, index) in faqs.data"
          v-bind:faq="faq" 
          v-bind:key="faq.id">
          <strong>{{ faq.Question }}</strong>
          <p>{{ faq.Answer }}</p>
          </li> -->
      </ol>
    </div>
    <button class="faq-btn" id="faq-all">Browse FAQs by Category</button>
    <button class="faq-btn" id="faq-fav">View favourite FAQs</button>
  </div>
</template>

<script>
import SearchInput from "./SearchInput";
import FAQItem from "./FAQItem";
import { mapState } from 'vuex'

export default {
  name: "search",
  components: {
    SearchInput,
    FAQItem
  },
  computed: {
    faqs() {
      return this.$store.state.faqs.data
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
  font-family: 'Poppins', sans-serif;
  /* text-align: center; */
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
