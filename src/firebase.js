
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDokYUyI-w3yPofeeU2agNs3TUvVB2nZ-Q",
  authDomain: "react-notes-afdbe.firebaseapp.com",
  projectId: "react-notes-afdbe",
  storageBucket: "react-notes-afdbe.appspot.com",
  messagingSenderId: "853807371732",
  appId: "1:853807371732:web:2db29c7d8869a692f67241"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")