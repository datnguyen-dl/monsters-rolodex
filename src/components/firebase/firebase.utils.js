// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCFYEKRd1pV2gzWTcoAm3qma6okurGUqhU",
    authDomain: "crwn-db-f283d.firebaseapp.com",
    projectId: "crwn-db-f283d",
    storageBucket: "crwn-db-f283d.appspot.com",
    messagingSenderId: "524290850249",
    appId: "1:524290850249:web:0550a799dc52964e83bc18",
    measurementId: "G-G7BMZYZJEQ"
};

firebase.initializeApp(firebaseConfig)

// Auth
export const auth = firebase.auth() 
export const firestore = firebase.firestore()


export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
googleAuthProvider.setCustomParameters({ promt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;


