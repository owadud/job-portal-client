// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtd37U3-srYVhDdTOzJRhZhQfZmSqsT90",
  authDomain: "job-portal-5a05e.firebaseapp.com",
  projectId: "job-portal-5a05e",
  storageBucket: "job-portal-5a05e.appspot.com",
  messagingSenderId: "1054339594553",
  appId: "1:1054339594553:web:713f64d1212ea0523350e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;