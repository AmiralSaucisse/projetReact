import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCPkfDTAztSUjeyEHoWyr0ZDzk_hGPBBz4",
    authDomain: "projetweather.firebaseapp.com",
    projectId: "projetweather",
    storageBucket: "projetweather.appspot.com",
    messagingSenderId: "219196283627",
    appId: "1:219196283627:web:acf23387c47c3c6f0cbcae"
  };


const fireapp = initializeApp(firebaseConfig);
const firebase = getFirestore(fireapp);
const auth = getAuth(fireapp);

export { auth, firebase };