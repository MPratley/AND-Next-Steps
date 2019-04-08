<template>
  <div>
    <!-- <p><strong>{{ faq.Question }}</strong></p> -->
    <strong><a @click="open = !open"
v-text="faq.Question"
/></strong>
    <div class="faq-answer">
      <ul v-show="open">
        <p v-text="faq.Answer" />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQItem",
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
a {
  display: block;
  cursor: pointer;
  color: $and-blue;
}
</style>
