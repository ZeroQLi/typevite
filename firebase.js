// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2mbdfu5p0Gdmz-lq8NsglqM3KA4tl1xI",
    authDomain: "typevite-end.firebaseapp.com",
    projectId: "typevite-end",
    storageBucket: "typevite-end.appspot.com",
    messagingSenderId: "929720500883",
    appId: "1:929720500883:web:037fcda57a092b8a788366",
    DatabaseURL:"https://typevite-end-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);