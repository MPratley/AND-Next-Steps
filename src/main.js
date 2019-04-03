import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";
//firebase and gapi
import VueGAPI from "vue-gapi";
import { firebase, initFirebase } from "@/firebase.js";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC8z7jhuADsz_FsikCx2xfN8OlQBvzGiBE",
  clientId:
    "205275658111-7t2ttcsmui6dd1q6c7oigv4rummde131.apps.googleusercontent.com",
  scope: [
    "email",
    "profile",
    "https://www.googleapis.com/auth/admin.directory.user",
    "https://www.googleapis.com/auth/admin.directory.user.readonly"
  ].join(" "),
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/admin/directory_v1/rest"
  ]
};

Vue.config.productionTip = false;
Vue.use(VueGAPI, config);

new Vue({
  router,
  store,
  created() {
    initFirebase();
    this.$getGapiClient().then(gapi => {
      this.$store.commit(
        "updateAuthStatus",
        gapi.auth2.getAuthInstance().isSignedIn.get()
      );
      gapi.auth2.getAuthInstance().isSignedIn.listen(isSignedIn => {
        this.$store.commit("updateAuthStatus", isSignedIn);
        if (isSignedIn) {
          var googleUser = gapi.auth2.getAuthInstance().currentUser.get();
          var id_token = googleUser.getAuthResponse().id_token;
          var fireCredentials = firebase.auth.GoogleAuthProvider.credential(
            id_token
          );
          firebase.auth().signInAndRetrieveDataWithCredential(fireCredentials);
        } else {
          firebase.auth().signOut();
        }
      });
    });
  },
  render: h => h(App)
}).$mount("#app");
