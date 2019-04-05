<template>
  <div class="search-input">
    <i class="material-icons search-icon">search</i>
    <input
      type="text"
      class="search-box"
      placeholder="Search or ask us a question..."
      @input="onChange"
      v-model="search"
    >
    <input type="submit" value="search" class="searchButton">
  </div>
</template>

<script>
// import func from "../../vue-temp/vue-editor-bridge";

import { mapGetters } from "vuex";

export default {
  name: "SearchInput",
  data() {
    return {
      search: "",
      results: ""
    };
  },
  props: {
    faqs: {
      type: Object
    }
  },
  methods: {
    onChange: function() {
      if (this.search.length > 3) {
        // this.filterSearch(this.search);
        console.log(this.filteredFaqs);
        // console.log(this.search);
      } else {
        return;
      }
    }
    // filterResult() {
    //   console.log(this.faqs);
    //   this.results = this.faqs.filter(faqs =>
    //     Object.values(this.faqs).filter(faq => faqs.includes(this.search))
    //   );
    //   return this.results;
    // }
  },
  computed: {
    filteredFaqs() {
      try {
        let a = this.$store.getters.getFilteredFaqs;
        console.log(a);
        return a;
      } catch (e) {
        console.log(e);
      }
    },
    searchWord: {
      get() {
        return this.$store.state.searchWord;
      },
      set() {
        console.log(search);
        this.$store.dispatch("FILTERED_FAQS", search);
      }
    }

    // faqQuestions() {
    //   let newFaqs = JSON.parse(JSON.stringify(this.faqs));
    //   newFaqs = { ...newFaqs };
    //   console.log(Object.values(...newFaqs));
    //   console.log(Object.values(...newFaqs).includes(this.search));
    // },
    // ...mapGetters(["getFAQByQuestion"])
  }

  // getFAQByQuestion() {
  //   return this.$store.getters.getFAQByQuestion(this.search);
  // }
  //   filterSearch() {
  //     return this.faqs.filter(faq => {
  //       console.log(faq.name, this.search);
  //       return (
  //         !this.search ||
  //         faq.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
  //       );
  //     });
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.search-input {
  display: flex;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin: 0.5em 1em 0.5em 0.5em;
}

.search-icon {
  padding: 1rem;
}

.search-box {
  border: 0;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  justify-content: center;
  /* flex: 1; */
}

.searchButton {
  background-color: $and-blue;
  border: 0;
  color: white;
  padding: 0.5rem;
  border-radius: 0;
  // width: 10em;
  font-size: 1.1em;
}

input[type="text"] {
  font-size: 0.8em;
  width: 100%;
  /* padding: 20px; */
  box-sizing: border-box;
  /* padding-left: 40px; */
  border-radius: 7px;
}

md-icon {
  font-family: "Material Icons" !important;
}
</style>
