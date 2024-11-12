// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIzXfpfONGc1Fg-_YhOtxO0-t6fkc0rg0",
  authDomain: "auth-moha-milon-f9000.firebaseapp.com",
  projectId: "auth-moha-milon-f9000",
  storageBucket: "auth-moha-milon-f9000.firebasestorage.app",
  messagingSenderId: "713385356850",
  appId: "1:713385356850:web:ccc668f85fbbf5d36c562b",
  measurementId: "G-WWDQQP58N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);