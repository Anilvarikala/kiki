
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfyukVPiMTOa2XMnFH0ecCCTZVHGtg5pg",
    authDomain: "website-99fe0.firebaseapp.com",
    projectId: "website-99fe0",
    storageBucket: "website-99fe0.firebasestorage.app",
    messagingSenderId: "968109017963",
    appId: "1:968109017963:web:402c8cb6cdb158363b1a2e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export const storage = getStorage(app);

export {db}
