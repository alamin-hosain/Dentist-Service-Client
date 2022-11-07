// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTkk_torhy06xAhb3ismxzrRTeqwukD6c",
    authDomain: "dentist-service-assignment.firebaseapp.com",
    projectId: "dentist-service-assignment",
    storageBucket: "dentist-service-assignment.appspot.com",
    messagingSenderId: "544562705076",
    appId: "1:544562705076:web:6051b3a56535e92fbfdde1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;