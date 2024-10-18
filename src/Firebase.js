import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDB9KEbMOXOLT_q8_gF179fQ5L0i3113Jo",
  authDomain: "food-recipe-9c310.firebaseapp.com",
  projectId: "food-recipe-9c310",
  storageBucket: "food-recipe-9c310.appspot.com",
  messagingSenderId: "254237490864",
  appId: "1:254237490864:web:0398d6d6acf5276322c575",
  measurementId: "G-CTB0Y5053R",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
