import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDIRUcF47MyMNhc7HzhWWfOFZflpjmKyw0",
  authDomain: "coza-react-d9512.firebaseapp.com",
  projectId: "coza-react-d9512",
  storageBucket: "coza-react-d9512.appspot.com",
  messagingSenderId: "727247933864",
  appId: "1:727247933864:web:b1d2147d2fcdab8f5c0d9d",
  measurementId: "G-C6VBYP7VBP"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);  
