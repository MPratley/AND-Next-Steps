<template>
  <div class="handy-andi">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Handy ANDi</h1>
    <div v-for="user in users" :key="user.id">
      <img :src="user.thumbnailPhotoUrl" />
      {{ user.primaryEmail }}
    </div>
  </div>
</template>

<script>
export default {
  name: "faq",
  components: {},
  data() {
    return {
      users: null
    };
  },
  created() {
    this.$getGapiClient().then(gapi => {
      gapi.client.directory.users
        .list({
          customer: "my_customer",
          viewType: "domain_public"
        })
        .then(data => {
          this.users = data.result.users;
        });
    });
  }
};
</script>

<style lang="scss">
h1 {
  color: $color-foreground;
}
</style>
