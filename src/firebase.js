import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC00noVeou_i--QAtzG_aDVKYAXZ7-idcA",
  authDomain: "sm-system-f9bc7.firebaseapp.com",
  projectId: "sm-system-f9bc7",
  storageBucket: "sm-system-f9bc7.firebasestorage.app",
  messagingSenderId: "869414308991",
  appId: "1:869414308991:web:4235ff91aaab916b78034a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);