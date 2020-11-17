import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAnExP9m4D2B5kR0S0BSoWsQ7wMmC75-VE",
  authDomain: "clone-acd41.firebaseapp.com",
  databaseURL: "https://clone-acd41.firebaseio.com",
  projectId: "clone-acd41",
  storageBucket: "clone-acd41.appspot.com",
  messagingSenderId: "427331460334",
  appId: "1:427331460334:web:7539347b97a5d98f6b27ff",
  measurementId: "G-STWRPQPCVL",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
