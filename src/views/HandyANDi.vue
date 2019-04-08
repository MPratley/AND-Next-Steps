<template>
  <div class="handy-andi">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Handy ANDi</h1>
    <div v-for="user in users" :key="user.id">
      <p>{{ user.primaryEmail }}</p>
      <div class="ANDi">
        <img class="thumbnail" :src="user.thumbnailPhotoUrl" />
      </div>
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
          console.log(data.result.users);
        });
    });
  }
};
</script>

<style lang="scss">
.handy-andi {
  text-align: center;
}
h1 {
  color: $color-foreground;
}
.ANDi {
  .thumbnail {
    height: 100%;
  }
  text-align: left;
  background: #fff;
  border-radius: 2px;
  width: 80%;
  height: 110px;
  display: inline-block;
  margin: 1rem;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.1s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(124, 124, 124, 0.25),
      0 10px 10px rgba(124, 124, 124, 0.22);
  }
}
</style>
