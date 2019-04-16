<template>
  <div class="category">
    <h2 class="title">Categories</h2>
    <div class="row">
      <div class="column">
        <div class="category-column" @click="() => selectCategory('Club')">
          <i class="material-icons category-icon" style="padding:35px">home</i>
          <br />Club
        </div>
      </div>
      <div class="column">
        <div class="category-column" @click="() => selectCategory('Company')">
          <i class="material-icons category-icon" style="padding:35px">work</i>
          <br />Company
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="category-column" @click="() => selectCategory('Me')">
          <i class="material-icons category-icon" style="padding:35px">face</i>
          <br />Me
        </div>
      </div>
      <div class="column">
        <div class="category-column" @click="() => selectCategory('Client')">
          <i class="material-icons category-icon" style="padding:35px"
            >domain</i
          >
          <br />Client
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FAQCategoryView",
  data() {
    return {
      category: ""
    };
  },

  methods: {
    selectCategory: function(category) {
      console.log(category);
      console.log(arguments);
      this.category = category;
      this.$store.dispatch("changeSearch", category);
      this.$store.dispatch("searchCategory");
      this.$router.push("/faq/search");
    }
  },

  computed: {
    ...mapActions(["changeSearch"])
  }
};
</script>

<style lang="scss">
.category-icon {
  font-size: 75px;
  opacity: 0.7;
}

.category {
  margin: 15px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  color: #323232;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  padding: 1em;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

.category-column {
  background-color: #fafafa;
  height: 11em;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
}
</style>
