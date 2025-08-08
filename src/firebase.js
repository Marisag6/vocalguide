// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyATMWhbqqV8oSBIgApvXFYLXUDkktra_rA',
  authDomain: 'Tvocalguide-69ad3.firebaseapp.com',
  projectId: 'vocalguide-69ad3',
  storageBucket: 'vocalguide-69ad3.firebasestorage.app',
  messagingSenderId: '12603664675',
  appId: '1:12603664675:web:3d67014c19784e2cf30496',
  measurementId: "G-GZ9BYHW3LE",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
//const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, analytics };
