import Vue from "vue";
import Vuex from "vuex";
import VuexEasyFirestore from "vuex-easy-firestore";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

import { firebase } from "@/firebase.js";

import tasks from "@/store/modules/tasks.js";

// do the magic 🧙🏻‍♂️
const easyFirestore = VuexEasyFirestore([tasks], {
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
