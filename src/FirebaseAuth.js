// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyA5nM1ov0IhbVo4Ofg_RWzuByf11dikxR4",
    authDomain: "inventory-management-8de03.firebaseapp.com",
    projectId: "inventory-management-8de03",
    storageBucket: "inventory-management-8de03.appspot.com",
    messagingSenderId: "673246382558",
    appId: "1:673246382558:web:5475735cf6f6aaf85db54f"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;