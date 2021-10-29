// Import the functions you need from the SDKs you need
import { initializeApp, auth } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKVtROdAUBkxDGJtkDbHRt6rvaKF5bzls",
  authDomain: "whats-app-clone-c7530.firebaseapp.com",
  projectId: "whats-app-clone-c7530",
  storageBucket: "whats-app-clone-c7530.appspot.com",
  messagingSenderId: "734900193710",
  appId: "1:734900193710:web:432aa12803faf4f809e03f",
  measurementId: "G-SNTJXRGQ4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = app.firestore();
const auth = app.auth();
const provider = auth.GoogleAuthProvider();

export {auth, provider};
export default db;
