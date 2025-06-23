import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu40HXDFWuhx5W2G5t-h1sUo0U79JF7QM",
  authDomain: "jobify-b9aab.firebaseapp.com",
  projectId: "jobify-b9aab",
  storageBucket: "jobify-b9aab.firebasestorage.app",
  messagingSenderId: "906247547727",
  appId: "1:906247547727:web:f33cef2c8d746470fc733a",
  measurementId: "G-K0F7FWEX7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Set persistence to LOCAL (persists even after browser restart)
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Auth persistence error:", error);
  }); 