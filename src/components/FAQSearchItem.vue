<template>
  <div class="faq-search-item">
    <!-- <p><strong>{{ faq.Question }}</strong></p> -->
    <strong>
      <a @click="open = !open" v-text="faq.Question" />
    </strong>
    <div class="faq-question-and-answer">
      <ul v-show="open" class="faq-answer">
        <div v-text="faq.Answer" />
      </ul>
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
      open: false
    };
  }
};
</script>

<style lang="scss">
.faq-search-item {
  background: #e5e5e5;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.2em;
}

.faq-answer {
  padding: 0 18px;
  overflow: hidden;
}

a {
  display: block;
  cursor: pointer;
  color: $and-blue;
}
</style>
