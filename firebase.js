import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDKY7BUNdDhdXrOaXAd6kK8lLqmBBQ7U8Y",
    authDomain: "notesapp-9093d.firebaseapp.com",
    projectId: "notesapp-9093d",
    storageBucket: "notesapp-9093d.appspot.com",
    messagingSenderId: "488349615753",
    appId: "1:488349615753:web:0d0a3e0c36d5288654a858",
    measurementId: "G-902R88BB75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth