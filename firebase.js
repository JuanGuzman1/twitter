// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-v4-c4865.firebaseapp.com",
  projectId: "twitter-v4-c4865",
  storageBucket: "twitter-v4-c4865.appspot.com",
  messagingSenderId: "754361136789",
  appId: "1:754361136789:web:2822b61e027b64a8160d9c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
