import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyC8_GQ0lZ9arzYL2vbQ0LRluXTUouFgpz8",
  authDomain: "thesis-writing-2a60e.firebaseapp.com",
  projectId: "thesis-writing-2a60e",
  storageBucket: "thesis-writing-2a60e.appspot.com",
  messagingSenderId: "1017532466573",
  appId: "1:1017532466573:web:dd1afa9ddf6beb8c08a9c4",
  measurementId: "G-MW4GPR5D80",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = app.storage();
const projectFirestore = app.firestore();
const projectAuth = app.auth();
const db = app.firestore();


export { projectFirestore, projectStorage, projectAuth, db, firebase };
