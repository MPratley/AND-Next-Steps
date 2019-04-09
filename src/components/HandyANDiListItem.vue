<template>
  <div id="listItem">
    <p>{{ andi.relation }}</p>
    <p v-if="!gapiAndi">{{ andi.email }}</p>
    <div v-else>
      <p>{{ gapiAndi.name.fullName }}</p>
      <div class="ANDi">
        <img class="thumbnail" :src="gapiAndi.thumbnailPhotoUrl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    andi: Object
  },
  data() {
    return {
      gapiAndi: null
    };
  },
  created() {
    this.$getGapiClient().then(gapi => {
      gapi.client.directory.users
        .list({
          customer: "my_customer",
          viewType: "domain_public",
          query: this.andi.email
        })
        .then(data => {
          this.gapiAndi = data.result.users[0];
        });
    });
  }
};
</script>

<style lang="scss" scoped>
#listItem {
  .thumbnail {
    height: 100%;
  }
  text-align: left;
  background: #fff;
  border-radius: 2px;
  width: 80%;
  height: 110px;
  display: block;
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
