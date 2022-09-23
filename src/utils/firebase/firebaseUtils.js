import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
  writeBatch,
} from "firebase/firestore";

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
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  // create document with unique id
  const userDocRef = doc(db, "users", userAuth.uid);
  // get user data from doc
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // create user data
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userDocRef;
};

//  create user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

// sign in user with email and password
export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

//  sign out a user
export const signOutUser = async () => await signOut(auth);

// state change listener for user state
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

// FIRESTORE
//  get chefs data
export const getChefsAndDocuments = async () => {
  const collectionRef = collection(db, "chefs");

  const querySnapshot = await getDocs(collectionRef);

  const chefs = querySnapshot.docs.map((doc) => doc.data());
  return chefs;
};

// get recipes data
export const getRecipesAndDocuments = async () => {
  const collectionRef = collection(db, "recipes");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const recipes = querySnapshot.docs.map((doc) => doc.data());
  return recipes;
};

//  add new collection and data to db
export const addCollectionAndDocuments = async (collectionKey, objsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objsToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj.chef.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
  console.log("done");
};
