import Vue from "vue";
import Vuex from "vuex";
// import "keen-ui/dist/keen-ui.css";
import VuexEasyFirestore from "vuex-easy-firestore";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

import { firebase } from "@/firebase.js";

import tasks from "@/store/modules/tasks.js";
import faqs from "@/store/modules/faqs.js";
import user from "@/store/modules/user.js";

// do the magic 🧙🏻‍♂️
const easyFirestore = VuexEasyFirestore([tasks, faqs, user], {
  logging: true,
  FirebaseDependency: firebase
});

const storeData = {
  state,
  mutations,
  actions,
  getters,
  plugins: [easyFirestore]
};

const store = new Vuex.Store(storeData);

export default store;
