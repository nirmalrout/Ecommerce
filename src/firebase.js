import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFtHj-BK5iSXd88zPbXGrK3MFN6F0uadY",
  authDomain: "oms-project-35efa.firebaseapp.com",
  projectId: "oms-project-35efa",
  storageBucket: "oms-project-35efa.firebasestorage.app",
  messagingSenderId: "736712239968",
  appId: "1:736712239968:web:64cebb34f0b16feea90c05",
  measurementId: "G-EFRSKJVW5R"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);