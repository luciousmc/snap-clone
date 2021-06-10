import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDQqSEzO-kHvnK_zlKF8r6XbdjTF9gd3ro",
  authDomain: "snapchat-clone-dc28e.firebaseapp.com",
  projectId: "snapchat-clone-dc28e",
  storageBucket: "snapchat-clone-dc28e.appspot.com",
  messagingSenderId: "303231735716",
  appId: "1:303231735716:web:a09878d40c1c613688d331"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };