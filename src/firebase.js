import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBru0Xc_Ngwwcy-VR_duD57Hpzn1gZFVU",
  authDomain: "b-71f57.firebaseapp.com",
  projectId: "b-71f57",
  storageBucket: "b-71f57.appspot.com",
  messagingSenderId: "254043059297",
  appId: "1:254043059297:web:36d1bdadbcbfc1225de620",
  measurementId: "G-GNNGJC8DEK",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
