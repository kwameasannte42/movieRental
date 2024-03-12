// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEsAZni74bkPbPU6hz4FC_J2jhUO4mxsY",
  authDomain: "movie-rental-5f218.firebaseapp.com",
  projectId: "movie-rental-5f218",
  storageBucket: "movie-rental-5f218.appspot.com",
  messagingSenderId: "983801988838",
  appId: "1:983801988838:web:5e5337cf3cb23d72551d27",
  measurementId: "G-DZNZDFZJXC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
