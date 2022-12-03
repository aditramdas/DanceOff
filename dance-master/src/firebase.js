import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDboy9m_eWypFaUGEWNw4oUSuDSvABopxs",
    authDomain: "danceoff-3e2d0.firebaseapp.com",
    projectId: "danceoff-3e2d0",
    storageBucket: "danceoff-3e2d0.appspot.com",
    messagingSenderId: "49114710460",
    appId: "1:49114710460:web:d6421b52ace99399e22bb9",
    measurementId: "G-SQ2XZ6VSH1"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider}
  export default db;