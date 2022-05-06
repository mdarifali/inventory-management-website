// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-g3OC2NjHwMZLePJw3KZDm2v5V7dkhsA",
    authDomain: "inventory-management-web-d2fba.firebaseapp.com",
    projectId: "inventory-management-web-d2fba",
    storageBucket: "inventory-management-web-d2fba.appspot.com",
    messagingSenderId: "357877151357",
    appId: "1:357877151357:web:ed42e779561dd35925e314"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;