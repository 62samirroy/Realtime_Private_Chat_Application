import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDROLXKfsEcMTmq3ED9OAksVrz8rv-V_4",
  authDomain: "justchat-e9d45.firebaseapp.com",
  projectId: "justchat-e9d45",
  storageBucket: "justchat-e9d45.appspot.com",
  messagingSenderId: "407133755530",
  appId: "1:407133755530:web:68d66991bfe9ac72eff573"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db=getFirestore();

