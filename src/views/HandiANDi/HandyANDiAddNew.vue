<template>
  <div class="createNewAndi">
    <ui-autocomplete
      name="email"
      help="Type the email of this ANDi"
      label="Email"
      placeholder="Email"
      :suggestions="employees"
      v-model="email"
      @input="update"
      :keys="{
        label: 'primaryEmail',
        value: 'primaryEmail',
        image: 'primaryEmail'
      }"
      :filter="filter"
    ></ui-autocomplete>
    <label for="role">Role of ANDi</label>
    <select id="role" v-model="role" name="role">
      <option>Squad Lead</option>
      <option>Dev Coach</option>
      <option>PDL</option>
      <option>Buddy</option>
    </select>
    <button type="submit" @click="add">create</button>
  </div>
</template>

<script>
import { UiAutocomplete } from "keen-ui";

export default {
  name: "CreateNewAndi",
  components: {
    UiAutocomplete
  },
  data() {
    return {
      role: "",
      email: "",
      employees: []
    };
  },
  methods: {
    add() {
      this.$store.dispatch("user/set", {
        handyAndi: [
          ...this.$store.state.user.data.handyAndi,
          { email: this.email, relation: this.role }
        ]
      });
      this.$router.go(-1);
    },
    update() {
      if (this.email.length >= 3) {
        this.$getGapiClient().then(gapi => {
          gapi.client.directory.users
            .list({
              customer: "my_customer",
              viewType: "domain_public",
              query: this.email
            })
            .then(data => {
              this.employees = data.result.users;
            });
        });
      }
    },
    filter(suggestion, query) {
      if (
        suggestion.primaryEmail.toLowerCase().includes(query.toLowerCase()) ||
        suggestion.name.fullName.toLowerCase().includes(query.toLowerCase())
      ) {
        return true;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
