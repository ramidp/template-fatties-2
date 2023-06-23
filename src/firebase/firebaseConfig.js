import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyvyduhe2oWwY5XvnlkFME8w4-ZKrPuwo",
  authDomain: "fatties-website.firebaseapp.com",
  projectId: "fatties-website",
  storageBucket: "fatties-website.appspot.com",
  messagingSenderId: "428684108545",
  appId: "1:428684108545:web:5193ccd2409fb53b4f7100",
  measurementId: "G-TNGPPC5GEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export { analytics, db }