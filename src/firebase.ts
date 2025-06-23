import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0-Pt9Gcj-PFMvLOA4jlzNnrliI6lVxxI",
  authDomain: "job-finder-c3d99.firebaseapp.com",
  projectId: "job-finder-c3d99",
  storageBucket: "job-finder-c3d99.firebasestorage.app",
  messagingSenderId: "6128075897",
  appId: "1:6128075897:web:b4cac81af398a8f21bc0a8",
  measurementId: "G-BMMNF3ET61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Set persistence to LOCAL (persists even after browser restart)
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Auth persistence error:", error);
  }); 
