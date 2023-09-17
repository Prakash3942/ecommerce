import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4rHzStydN96hCfEC0AuFYseRiMw-gfDI",
  authDomain: "ecommerce-app-3b4ce.firebaseapp.com",
  projectId: "ecommerce-app-3b4ce",
  storageBucket: "ecommerce-app-3b4ce.appspot.com",
  messagingSenderId: "526759739059",
  appId: "1:526759739059:web:c0831dcb1649e953333ac6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
