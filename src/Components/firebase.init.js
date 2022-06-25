// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4TpNtNe0zqeeEAtdt43EX9E-95zXd2Pg",
  authDomain: "hello-facility.firebaseapp.com",
  projectId: "hello-facility",
  storageBucket: "hello-facility.appspot.com",
  messagingSenderId: "24952160107",
  appId: "1:24952160107:web:0954c0565a659fe01b562e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app)
export default auth;