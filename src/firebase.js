import firebase from "firebase/compat/app"
import { GoogleAuthProvider } from "firebase/auth";

import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAdxz5Vnw3J6yEieEvD-YYrh-1Ac81DXXE",
    authDomain: "ecomerce-e4f0d.firebaseapp.com",
    projectId: "ecomerce-e4f0d",
    storageBucket: "ecomerce-e4f0d.appspot.com",
    messagingSenderId: "291441985273",
    appId: "1:291441985273:web:4b000b72f161c295e9c428"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new GoogleAuthProvider();

  
  export {auth, provider}

  