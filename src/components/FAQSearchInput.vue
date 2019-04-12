<template>
  <div class="search-input">
    <i class="material-icons search-icon">search</i>
    <input
      v-model="search"
      type="text"
      class="search-box"
      placeholder="Search or ask us a question..."
      @input="onChange"
    />
    <!-- <input type="submit" value="search" class="searchButton"> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SearchInput",
  props: {
    faqs: {
      type: Object
    }
  },
  data() {
    return {
      search: "",
      results: ""
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters(["getFaqs", "getFilteredFaqs"])
  },
  methods: {
    onChange: function() {
      if (this.search.length > 3) {
        this.$store.dispatch("changeSearch", this.search.toLowerCase());
        this.$store.dispatch("searchData");
      } else {
        this.$store.dispatch("resetSearch");
        return;
      }
    },
    ...mapActions(["changeSearch", "changeData"])
  }
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
