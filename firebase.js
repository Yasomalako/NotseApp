import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCTTnb6q1AjVRDgR4-rprMftR6v02jufw8",
  authDomain: "noteapp-9eff6.firebaseapp.com",
  projectId: "noteapp-9eff6",
  storageBucket: "noteapp-9eff6.appspot.com",
  messagingSenderId: "1088434718699",
  appId: "1:1088434718699:web:e364403c4ca5c1eda7bbae"
};


// Initialize Firebase
 const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
