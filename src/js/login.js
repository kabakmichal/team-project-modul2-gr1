// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { Notify } from "notiflix";


const signIn = document.querySelector(".sign-in");
const signUp = document.querySelector(".sign-up");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const login = document.querySelector('.log-in');
const logOut = document.querySelector('.log-out');
let user;
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
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  });
})
  
//LOGIN USERS

signIn.addEventListener("click", (e) => {
  e.preventDefault(),

signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    user = userCredential.user,
    document.querySelector('[login-modal]').classList.toggle('is-hidden');
    Notify.success(`Hi, ${user.email.split('@')[0]}, you are sign in!`);
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Notify.failure(`Wrong email or password!`)
  });
})

//LOG OUT
logOut.addEventListener("click", (e) => {
  e.preventDefault(),
    signOut(auth)
      .then(() => {
        return login.classList.toggle('is-hidden'),
        logOut.classList.toggle('is-hidden'),
        Notify.info(`Goodbye, you are logged out!`);
      }).catch((error) => {
        Notify.info(`Goodbye, you are logged out!`)
      })
})

onAuthStateChanged(auth, (user) => {
  if (user) {
    login.classList.toggle('is-hidden'),
    logOut.classList.toggle('is-hidden')
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});