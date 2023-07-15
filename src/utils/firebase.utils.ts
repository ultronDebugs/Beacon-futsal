// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF2zSgYCMVG3OvsjBN6pxumRir_TOhfFA",
  authDomain: "bookish-winner.firebaseapp.com",
  projectId: "bookish-winner",
  storageBucket: "bookish-winner.appspot.com",
  messagingSenderId: "930937650548",
  appId: "1:930937650548:web:c1c0775d4ff22220078021",
  measurementId: "G-MWDWDRMWX7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const userSignOut = () => {
  signOut(auth);
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signUpUserWithEmailAndPassword = (
  email: string,
  password: string
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};

// export const signinWitEmailAndPassword=

export const signInWithGoogle = async () => {
  let signedInUser = {};
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // signedInUser = result.user;
      // This gives you a Google Access Token. You can use it to access the Google API.

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // console.log("user log by fire base:", user);

      // signedInUser = user;
      return user;
      // ...
    })
    .then((user) => (signedInUser = user))
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      console.log(email);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
      // ...
    });

  return signedInUser;
};

// const analytics = getAnalytics(app);
