
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "placeholder",
    authDomain: "react-scaffolding-app.firebaseapp.com",
    projectId: "react-scaffolding-app",
    storageBucket: "react-scaffolding-app.appspot.com",
    messagingSenderId: "placeholder",
    appId: "placeholder",
    measurementId: "placeholder"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};