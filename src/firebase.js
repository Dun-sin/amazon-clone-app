import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC4G6-9_0zv_gV3jAIwUEDmmrTBVnet10w",
  authDomain: "clone-a6012.firebaseapp.com",
  projectId: "clone-a6012",
  storageBucket: "clone-a6012.appspot.com",
  messagingSenderId: "918762229387",
  appId: "1:918762229387:web:84d9890c5822ba137a8e8e",
  measurementId: "G-GFK7NMWH96"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };