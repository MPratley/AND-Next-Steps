import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";
//Gapi and Firebase
import VueGAPI from "vue-gapi";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "@/firebaseConfig.js";

const gapiConfig = {
  apiKey: firebaseConfig.apiKey,
  clientId: firebaseConfig.clientID,
  discoveryDocs: firebaseConfig.discoveryDocs,
  scope: firebaseConfig.scopes.join(" ")
};

Vue.config.productionTip = false;
Vue.use(VueGAPI, gapiConfig);

new Vue({
  router,
  store,
  created() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      this.$store.commit("updateAuthStatus", user != null);
    });
  },
  render: h => h(App)
}).$mount("#app");
