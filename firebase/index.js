// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDbYD4x4FmsOpdq7ErEbQY5swZOllEMdt0",
	authDomain: "humanitarian-inc.firebaseapp.com",
	projectId: "humanitarian-inc",
	storageBucket: "humanitarian-inc.appspot.com",
	messagingSenderId: "526447861539",
	appId: "1:526447861539:web:4a3eb946d2fd2f5c32b696"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
