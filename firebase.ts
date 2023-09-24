import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Safe to commit configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDD4Rt61xcV8-QlBj9zUN6XZdNJnGSt4gg",
  authDomain: "seneca-xylocone.firebaseapp.com",
  projectId: "seneca-xylocone",
  storageBucket: "seneca-xylocone.appspot.com",
  messagingSenderId: "790106686514",
  appId: "1:790106686514:web:13fb45991084902ddc282b",
  measurementId: "G-8SSZJRWSXJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const functions = getFunctions(app);

// While in local development, use emulators
if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFunctionsEmulator(functions, "localhost", 5001);
}

export { auth, functions };
