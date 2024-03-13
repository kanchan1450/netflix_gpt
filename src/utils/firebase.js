// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgMwHwpvVX-mMBJpdXT5bo_z6ybBq29iA",
  authDomain: "netflix-gpt-a55bc.firebaseapp.com",
  projectId: "netflix-gpt-a55bc",
  storageBucket: "netflix-gpt-a55bc.appspot.com",
  messagingSenderId: "688116365700",
  appId: "1:688116365700:web:76fe8a74d2a51e83ff45d1",
  measurementId: "G-WVLYL9GBZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();