import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ3_jYFC_LAQW0qajwzeSl9Vyx1jL8nO4",
  authDomain: "techstore-franco-gobbi.firebaseapp.com",
  projectId: "techstore-franco-gobbi",
  storageBucket: "techstore-franco-gobbi.firebasestorage.app",
  messagingSenderId: "508253105008",
  appId: "1:508253105008:web:cc371eb5da2805a01c3db5",
  measurementId: "G-1Y5P02NMYR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);