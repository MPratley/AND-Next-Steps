<template>
  <div class="handy-andi-list">
    <h1>Your ANDi</h1>
    <div v-if="createNewAndi" class="createNewAndi">
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
    <div v-for="andi in handyAndi" :key="andi.email">
      <HandyANDiListItem :andi="andi" class="andi" />
    </div>
    <button
      class="mdc-fab mdc-fab--extended new-andi"
      @click="toggleCreateNewAndi"
    >
      <span class="material-icons mdc-fab__icon">add</span>
      <span class="mdc-fab__label">New Andi</span>
    </button>
  </div>
</template>

<script>
import HandyANDiListItem from "@/components/HandyANDiListItem";
import { UiAutocomplete } from "keen-ui";

export default {
  name: "Handy Andi",
  components: {
    HandyANDiListItem,
    UiAutocomplete
  },
  computed: {
    handyAndi() {
      return this.$store.getters["user/getHandyAndi"];
    }
  },
  data() {
    return {
      createNewAndi: false,
      role: "",
      email: "",
      employees: []
    };
  },
  methods: {
    toggleCreateNewAndi() {
      this.createNewAndi = !this.createNewAndi;
    },
    add() {
      this.$store.dispatch("user/set", {
        handyAndi: [
          ...this.handyAndi,
          { email: this.email, relation: this.role }
        ]
      });
    },
    update() {
      if (this.email.length > 3) {
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

<style lang="scss">
@import "@material/fab/mdc-fab";

.handy-andi-list {
  text-align: center;
}
h1 {
  color: $color-foreground;
}
#AddNewAndi {
  border: 2px dashed grey;
  width: 90%;
  margin: 0 auto;
  height: 100px;
}

.andi {
  margin-bottom: 8px;
}

.new-andi {
  background-color: $color-accent;
  position: fixed;
  bottom: 100px;
  transform: translateX(-50%);
}
</style>
