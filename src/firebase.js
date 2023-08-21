
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAdz7DIqujDXCcOfwYnSBFlmn1puf85LTk",
  authDomain: "react-notes-e5e71.firebaseapp.com",
  projectId: "react-notes-e5e71",
  storageBucket: "react-notes-e5e71.appspot.com",
  messagingSenderId: "135492491729",
  appId: "1:135492491729:web:2b3c6921077021375928f0",
  measurementId: "G-5ZC9J5MVGM"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, "notes")
const analytics = getAnalytics(app);