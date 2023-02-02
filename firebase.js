// // Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
// // import firebase from '@firebase/app';
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore';



// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDKY7BUNdDhdXrOaXAd6kK8lLqmBBQ7U8Y",
//   authDomain: "notesapp-9093d.firebaseapp.com",
//   projectId: "notesapp-9093d",
//   storageBucket: "notesapp-9093d.appspot.com",
//   messagingSenderId: "488349615753",
//   appId: "1:488349615753:web:0d0a3e0c36d5288654a858",
//   measurementId: "G-902R88BB75"
// };


//   // Initialize Firebase
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
//   }
  
//   export { firebase }
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
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
