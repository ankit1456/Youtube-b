import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIgWoAfy7D7TIotuPHjQ4M6yw2FM0yGf0",
  authDomain: "b-3e018.firebaseapp.com",
  projectId: "b-3e018",
  storageBucket: "b-3e018.appspot.com",
  messagingSenderId: "94900020637",
  appId: "1:94900020637:web:c1604485eef08f025c7b74",
  measurementId: "G-ZCMTSGX41J",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
