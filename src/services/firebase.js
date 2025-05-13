import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore"; // Cambia esta línea
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  databaseURL: "https://gestor-tarea.firebaseio.com" 

};

const app = initializeApp(firebaseConfig);

// Configura Firestore con long polling
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true, // ✅ Opción correcta
});

const auth = getAuth(app);

export { db, auth };
