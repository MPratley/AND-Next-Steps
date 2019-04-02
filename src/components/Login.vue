<template>
  <div id="login-view">
    <button @click="signIn">Sign In!</button>
  </div>
</template>

<script>
export default {
  methods: {
    signIn() {
      this.$getGapiClient().then(gapi => {
        gapi.auth2.getAuthInstance().signIn();
      });
    }
  }
};
</script>
