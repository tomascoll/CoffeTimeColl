// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrDCrslptraSyA9WvKzSWjMini398Y_Ok",
  authDomain: "coffetimeshop-1be0f.firebaseapp.com",
  projectId: "coffetimeshop-1be0f",
  storageBucket: "coffetimeshop-1be0f.appspot.com",
  messagingSenderId: "317123855943",
  appId: "1:317123855943:web:7884b0623c057366ba5362",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


