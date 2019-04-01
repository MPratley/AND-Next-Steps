import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";
//Firebase
import firebase from "firebase/app";

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "andlist.firebaseapp.com",
  databaseURL: "https://andlist.firebaseio.com",
  projectId: "andlist",
  storageBucket: "andlist.appspot.com",
  messagingSenderId: "100262585254",
  clietnId: process.env.GOOGLE_CLIENT_ID,
  scopes: [
    "email",
    "profile",
    "https://www.googleapis.com/auth/admin.directory.user",
    "https://www.googleapis.com/auth/admin.directory.user.readonly"
  ],
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/admin/directory_v1/rest"
  ]
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    firebase.initializeApp(config);
  },
  render: h => h(App)
}).$mount("#app");
