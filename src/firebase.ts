// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNhpfGHLyTMiE96imSe-5O55tKiZw-2ug",
  authDomain: "govibe-59258.firebaseapp.com",
  projectId: "govibe-59258",
  storageBucket: "govibe-59258.firebasestorage.app",
  messagingSenderId: "723960983972",
  appId: "1:723960983972:web:58949ae89673e1a503d131",
  measurementId: "G-Q5XS59EMKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Storage instance
export const storage = getStorage(app);