import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBs_LdCsUAMVWqAe7-E6E1IpbzNh9gDVag",
  authDomain: "olx-clone-4c04c.firebaseapp.com",
  projectId: "olx-clone-4c04c",
  storageBucket: "olx-clone-4c04c.firebasestorage.app",
  messagingSenderId: "273560996139",
  appId: "1:273560996139:web:5a60703982f5b639bbdd6e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();