<template>
  <div class="faq-search-item">
    <!-- <p><strong>{{ faq.Question }}</strong></p> -->
    <div class="faq-question">
      <strong>
        <a
          class="faq-question-text"
          @click="open = !open"
          v-text="faq.Question"
        ></a>
      </strong>
    </div>
    <div class="faq-icon">
      <i class="material-icons" v-if="!open">keyboard_arrow_down</i>
      <i class="material-icons" v-else>expand_less</i>
      <i class="material-icons" v-if="starred" @click="removeFromFavourites"
        >star</i
      >
      <i class="material-icons" @click="addToFavourites" v-else>star_border</i>
    </div>
    <div v-show="open" class="faq-answer" v-text="faq.Answer" />
    <div v-show="open" class="faq-helpful">
      <h5>WAS THIS HELPFUL?</h5>
      <div class="faq-smileys">
        <i class="far fa-frown-open"></i>
        <i class="far fa-frown"></i>
        <i class="far fa-meh"></i>
        <i class="far fa-smile"></i>
        <i class="far fa-grin"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQSearchItem",
  props: {
    faq: {
      type: Object
    }
  },
  data: function() {
    return {
      open: false,
      starred: false,
      needsWork: false
    };
  },
  methods: {
    addToFavourites: function() {
      this.starred = true;
      this.$store.dispatch("addToFavourites", this.faq);
    },
    removeFromFavourites: function() {
      this.starred = false;
      this.$store.dispatch("removeFromFavourites", this.faq);
    },
    needsWorkExplanation: function() {
      // if the 3 most negative faces are clicked, then prompt user to please provide explanation of why answer was not helpful. This will be recorded in FB.
    }
  }
};
</script>

<style lang="scss">
.faq-question {
  display: inline-flex;
}

.faq-question-text {
  padding-right: 3em;
}

.faq-icon {
  align-self: flex-end;
}

.faq-helpful {
  display: flex;
  flex-flow: column;
}

.faq-smileys {
  justify-items: space-between;
  text-align: center;
}

.faq-search-item {
  background: #e5e5e5;
  font-family: "Lato", sans-serif;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.2em;
  margin: 0.5em;
}

.faq-answer {
  overflow: hidden;
}

.far {
  font-weight: 400;
  font-size: 30px;
  padding: 0.5em;
  opacity: 0.6;
}

.far:hover {
  color: $and-red;
}
a {
  display: block;
  cursor: pointer;
  color: $and-blue;
}

h5 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: normal;
  text-align: center;
  letter-spacing: 0.04em;
}
</style>
