<template>
  <div class="favourite">
    <h2 class="title">Your starred questions</h2>
    <FAQFavouriteItem
      v-for="faq in getFavouriteFaqs"
      :key="faq.Question"
      :faq="faq"
      @click="removeFromFavourites"
    />
  </div>
</template>

<script>
import FAQFavouriteItem from "@/components/FAQFavouriteItem";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FAQFavouriteView",
  components: {
    FAQFavouriteItem
  },
  computed: {
    ...mapGetters(["getFavouriteFaqs"])
  },
  methods: {
    ...mapActions(["removeFromFavourites"])
  }
};
</script>

<style lang="scss">
.favourite-box {
  height: 400px;
  width: 400px;
}

.title {
  color: $and-blue;
  text-align: center;
}
</style>
