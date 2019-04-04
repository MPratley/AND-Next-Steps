<template>
  <div>
    <!-- <p><strong>{{ faq.Question }}</strong></p> -->
    <strong><a @click="open = !open" v-text="faq.Question"></a></strong>
    <div class="faq-answer">
      <ul v-show="open">
        <p v-text="faq.Answer"></p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQItem",
  data: function() {
    return {
      open: false
    };
  },
  props: {
    faq: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
a {
  display: block;
  cursor: pointer;
  color: $and-blue;
}
</style>
