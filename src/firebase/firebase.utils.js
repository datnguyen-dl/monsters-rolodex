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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    // console.log(snapShot)

    if(!snapShot.exists) { 
        const {displayName, email} = userAuth;
        const createAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig)

// Auth
export const auth = firebase.auth() 
export const firestore = firebase.firestore()


export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
googleAuthProvider.setCustomParameters({ promt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;


