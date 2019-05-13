import app from "firebase/app";
import auth from "firebase/auth";
import firestore from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDLNPzDCAZ98YSeMVeqRL3dVIoJ9NYfsNM",
  authDomain: "fullg-52879.firebaseapp.com",
  databaseURL: "https://fullg-52879.firebaseio.com",
  projectId: "fullg-52879",
  storageBucket: "fullg-52879.appspot.com",
  messagingSenderId: "3427531514"
};

app.initializeApp(config);
window.firebase = app;
window.firestore = firestore;
const googleAuth = new app.auth.GoogleAuthProvider();
export default { app, auth, googleAuth, firestore };
