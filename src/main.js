import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";
import VueGAPI from "vue-gapi";

const config = {
  apiKey: "AIzaSyC8z7jhuADsz_FsikCx2xfN8OlQBvzGiBE",
  clientId:
    "205275658111-ho20gfi8uenlar4s89letdpnt15jilm8.apps.googleusercontent.com",
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
    this.$getGapiClient().then(gapi => {
      this.$store.commit("updateAuthStatus", this.$isAuthenticated);
      gapi.auth2.getAuthInstance().isSignedIn.listen(boolean => {
        this.$store.commit("updateAuthStatus", boolean);
        console.log("sign in status: " + boolean);
      });
    });
  },
  render: h => h(App)
}).$mount("#app");
