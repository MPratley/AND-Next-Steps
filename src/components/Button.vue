<template>
  <div class="buttonDiv">
    <button class="button" @click="say('clicked')">
      <slot>Some Text</slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    say: function(string) {
      alert(string);
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  background-color: $color-accent;
  color: $color-background;
  padding: 16px;
  border: none;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 12px;
}
</style>
