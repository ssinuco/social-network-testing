import { changeRoute } from "./lib/router.js";

const init = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDp6FmSYdd1HXCaT3_CW9HXIrGhOyjDiu4",
    authDomain: "ssinuco-social-network.firebaseapp.com",
    projectId: "ssinuco-social-network",
    storageBucket: "ssinuco-social-network.appspot.com",
    messagingSenderId: "515800619961",
    appId: "1:515800619961:web:58f233f94484b8cc803468"
  };
  firebase.initializeApp(firebaseConfig);

  changeRoute(window.location.hash);

  window.addEventListener("hashchange", () => {
    changeRoute(window.location.hash);
  });
};

window.addEventListener("load", init);
