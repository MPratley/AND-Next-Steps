import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC8z7jhuADsz_FsikCx2xfN8OlQBvzGiBE",
  authDomain: "and-next-steps.firebaseapp.com",
  databaseURL: "https://and-next-steps.firebaseio.com",
  projectId: "and-next-steps",
  storageBucket: "and-next-steps.appspot.com",
  messagingSenderId: "205275658111"
};

function initFirebase() {
  firebase.initializeApp(firebaseConfig);
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .enablePersistence()
      .then(resolve)
      .catch(err => {
        if (err.code === "failed-precondition") {
          reject(err);
          // Multiple tabs open, persistence can only be
          // enabled in one tab at a a time.
        } else if (err.code === "unimplemented") {
          reject(err);
          // The current browser does not support all of
          // the features required to enable persistence
        }
      });
  });
}

export { firebase, initFirebase };
