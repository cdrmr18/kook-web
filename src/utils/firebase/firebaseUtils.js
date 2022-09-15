import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

// Set up user authentication for sign in/out
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// create database
export const db = getFirestore();

// use the auth token to save user data into firestore database
export const createUserDocumentFromAuth = async (userAuth) => {
  // create document with unique id
  const userDocRef = doc(db, "users", userAuth.uid);
  // get user data from doc
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userDocRef;
};