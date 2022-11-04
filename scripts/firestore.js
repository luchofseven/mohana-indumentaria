import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqVSpn9ZPsDfPRdxWQRmZ8Lg2AoCPv_2o",
  authDomain: "mohana-8f0d5.firebaseapp.com",
  projectId: "mohana-8f0d5",
  storageBucket: "mohana-8f0d5.appspot.com",
  messagingSenderId: "337831298949",
  appId: "1:337831298949:web:72f89095da381d2d5566ec",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export const getProducts = () => getDocs(collection(db, "products"));

export const onGetProducts = (callback) =>
  onSnapshot(collection(db, "products"), callback);
