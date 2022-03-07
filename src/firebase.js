import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAqDuqiW7XVjYO9thHXwStYxpYDtMgNtw",
  authDomain: "twitter-clone-udemy-db9fb.firebaseapp.com",
  projectId: "twitter-clone-udemy-db9fb",
  storageBucket: "twitter-clone-udemy-db9fb.appspot.com",
  messagingSenderId: "566265675329",
  appId: "1:566265675329:web:cf0970b9865314871910c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;