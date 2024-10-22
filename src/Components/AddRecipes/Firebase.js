import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection, addDoc,getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB9KEbMOXOLT_q8_gF179fQ5L0i3113Jo",
  authDomain: "food-recipe-9c310.firebaseapp.com",
  projectId: "food-recipe-9c310",
  storageBucket: "food-recipe-9c310.appspot.com",
  messagingSenderId: "254237490864",
  appId: "1:254237490864:web:0398d6d6acf5276322c575",
  measurementId: "G-CTB0Y5053R"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const recipeCollection = collection(db, 'Add Recipe')

export {recipeCollection,addDoc,getDocs}