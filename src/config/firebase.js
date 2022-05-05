import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDY_Gxv0uxODy1rshZO1rR1nIFmLOpdZVw",
  authDomain: "pma-final-project.firebaseapp.com",
  databaseURL:
    "https://pma-final-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pma-final-project",
  storageBucket: "pma-final-project.appspot.com",
  messagingSenderId: "223875731318",
  appId: "1:223875731318:web:2afd6926031d1b66887457",
};

export const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
