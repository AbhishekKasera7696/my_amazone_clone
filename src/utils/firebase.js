//  import firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAq9MwspV5YRLnrsHMsrvnPaHeUUDupqpM",
  authDomain: "clone-43b4d.firebaseapp.com",
  projectId: "clone-43b4d",
  storageBucket: "clone-43b4d.appspot.com",
  messagingSenderId: "128325120315",
  appId: "1:128325120315:web:7c42a968fb5aff6495471e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
