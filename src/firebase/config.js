import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBkWpTeHjdefIW0ZhBVfPWMQTMFAF1lYmQ",
  authDomain: "mymoney-14d1d.firebaseapp.com",
  projectId: "mymoney-14d1d",
  storageBucket: "mymoney-14d1d.appspot.com",
  messagingSenderId: "921448533625",
  appId: "1:921448533625:web:665d9e72959bb192da0ea8"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };