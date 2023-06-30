import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0jVh1ggaMRUE_prnEfxIHoTB0O8-BwvM",
    authDomain: "getcement-live.firebaseapp.com",
    projectId: "getcement-live",
    storageBucket: "getcement-live.appspot.com",
    messagingSenderId: "100640914259",
    appId: "1:100640914259:web:0e3ac14f27aef5ee657fa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }