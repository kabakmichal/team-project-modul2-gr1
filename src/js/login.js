// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const signIn = document.querySelector(".sign-in");
const signUp = document.querySelector(".sign-up");
const email = document.querySelector(".email").value;
const password = document.querySelector(".password");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmlAUxSmsorqvvGhyqPkNR3fkWe-xtgOk",
  authDomain: "team-project-modul2-gr1.firebaseapp.com",
  projectId: "team-project-modul2-gr1",
  storageBucket: "team-project-modul2-gr1.appspot.com",
  messagingSenderId: "893242105372",
  appId: "1:893242105372:web:df17d7a24a1a4afccf09d9",
  measurementId: "G-R1WYLNWRMY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Authentication
const auth = getAuth(app);

// SIGN UP USERS


signUp.addEventListener("click", (e) => {
  e.preventDefault(),
console.log(email,password.value)
createUserWithEmailAndPassword(auth, email, password.value)
  .then((userCredential) => {
    // Signed in 
      console.log(userCredential)
    const user = userCredential.user;
    // ...
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  });})

