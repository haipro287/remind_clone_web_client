import firebase from "firebase/app";
import "firebase/storage";
import axios from "./axios";

const GET_CLASSROOM_FILES = "/api/file";
const ADD_FILE = "/api/file";

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

export function getClassroomFiles(classroomId) {
  return axios.get(`${GET_CLASSROOM_FILES}/${classroomId}`);
}

export function addFile({ name, type, size, url }, classroomId, message) {
  return axios.post(`${ADD_FILE}/${classroomId}`, {
    name,
    type,
    url,
    size,
    message,
  });
}
