<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import config from "@/firebaseConfig.js";
import firebaseui from "firebaseui";

const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: config.scopes
    }
  ]
};

export default {
  created() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>
