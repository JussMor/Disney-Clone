import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider } from "firebase/auth";
// import { storage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB5_xDXZnz4cGuMEmHakY0Ly2cS7X8K29s",
    authDomain: "jussmor-16.firebaseapp.com",
    databaseURL: "https://jussmor-16.firebaseio.com",
    projectId: "jussmor-16",
    storageBucket: "jussmor-16.appspot.com",
    messagingSenderId: "268841862827",
    appId: "1:268841862827:web:0eb3251f356ad3c53b59ee",
    measurementId: "G-LB6BLK10M9"
};

try {
    initializeApp(firebaseConfig);
} catch (err) {
        console.error('Firebase initialization error', err.stack);
}

// const storageFirebase  = storage();
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
