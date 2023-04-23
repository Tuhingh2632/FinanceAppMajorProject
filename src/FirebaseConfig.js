import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCuD5KOCDa3UuYNx3ej3ki2O7xp0KY9Tvg",
  authDomain: "finance-advisor-a805b.firebaseapp.com",
  projectId: "finance-advisor-a805b",
  storageBucket: "finance-advisor-a805b.appspot.com",
  messagingSenderId: "526135852192",
  appId: "1:526135852192:web:97d9c5bcb4f3e1d6bb5dc5",
  measurementId: "G-TT0YL7M60K"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const provider=new GoogleAuthProvider();
const db=getFirestore(app);

export {app,auth,provider,db};