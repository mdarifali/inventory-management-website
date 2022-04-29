// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnV5jUz5NkvoD_5e4IMkmn9sKXRZboKac",
    authDomain: "online-fitness-trainer.firebaseapp.com",
    projectId: "online-fitness-trainer",
    storageBucket: "online-fitness-trainer.appspot.com",
    messagingSenderId: "138390532750",
    appId: "1:138390532750:web:11253ecac603b7cecc8fdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;