// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVWhtOzzW7lMY4TQbuVqFz7M-sGmlIxMU",
  authDomain: "unmasked-game-88f45.firebaseapp.com",
  databaseURL: "https://unmasked-game-88f45-default-rtdb.firebaseio.com",
  projectId: "unmasked-game-88f45",
  storageBucket: "unmasked-game-88f45.appspot.com",
  messagingSenderId: "941841747635",
  appId: "1:941841747635:web:b5d48600beade449e92ac6",
  measurementId: "G-N2TXR2J9N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);