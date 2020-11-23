import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy39Ff25RoLUZ710M0Opyo9om92Q3gSRo",
  authDomain: "remind-clone.firebaseapp.com",
  databaseURL: "https://remind-clone.firebaseio.com",
  projectId: "remind-clone",
  storageBucket: "remind-clone.appspot.com",
  messagingSenderId: "1026203142638",
  appId: "1:1026203142638:web:151512c6daf737b33066ff",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.storage();
