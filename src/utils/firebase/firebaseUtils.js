import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8YrG9UztpKe46Mn63Ggm9EDIXbOhELoE",
  authDomain: "kook-c5919.firebaseapp.com",
  projectId: "kook-c5919",
  storageBucket: "kook-c5919.appspot.com",
  messagingSenderId: "530632612436",
  appId: "1:530632612436:web:a11b5decfb89ff048bebc1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
