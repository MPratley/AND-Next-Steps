<template>
  <div class="mdc-card andi-card mdc-card__primary-action" @click="removeAndi">
    <div
      v-if="gapiAndi"
      class="mdc-card__media mdc-card__media--square andi-image"
      :style="{ 'background-image': 'url(' + gapiAndi.thumbnailPhotoUrl + ')' }"
    ></div>
    <div v-else class="mdc-card__media mdc-card__media--square andi-image">
      loading
    </div>
    <div class="andi-textblock">
      <h2>{{ gapiAndi.name.fullName }}</h2>
      <p>{{ andi.relation }}</p>
      <!-- <p>{{gapiAndi.thumbnailPhotoUrl}}</p> -->
    </div>
  </div>
  <!-- <p>{{ andi.relation }}</p>
    <p v-if="!gapiAndi">{{ andi.email }}</p>
    <div v-else>
      <p>{{ gapiAndi.name.fullName }}</p>
      <div class="ANDi">
        <img class="thumbnail" :src="gapiAndi.thumbnailPhotoUrl">
      </div>
  </div>-->
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
  methods: {
    removeAndi() {
      var temp = this.$store.state.user.data.handyAndi.filter(obj => {
        return obj.email != this.andi.email;
      });
      this.$store.dispatch("user/patch", { handyAndi: temp });
    }
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
@import "~@material/card/mdc-card";

.andi-card {
  display: flex;
  flex-direction: row;
}

.andi-image {
  width: 100px;
}

.andi-textblock {
  padding: 1rem;
}
</style>
