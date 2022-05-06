// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyBi0_wff4Yiq_k__d92lEc1aX1clSJ9itI",

    authDomain: "inventory-management-d1499.firebaseapp.com",

    projectId: "inventory-management-d1499",

    storageBucket: "inventory-management-d1499.appspot.com",

    messagingSenderId: "746091816566",

    appId: "1:746091816566:web:1fde85747bd77074a6e157"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;