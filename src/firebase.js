import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ? this will be hidden in an envirnoment variable

// ? web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwgI1Ez5pqjyzLgUM2JrcY6zmYzynVQ5Q",
  authDomain: "pmoinvesco-5c1ce.firebaseapp.com",
  projectId: "pmoinvesco-5c1ce",
  storageBucket: "pmoinvesco-5c1ce.appspot.com",
  messagingSenderId: "361196578221",
  appId: "1:361196578221:web:e6215e614a180e4c77ed24",
};

// ? Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
