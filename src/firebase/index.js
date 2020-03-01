import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "shopping-master-575b9.firebaseapp.com",
  databaseURL: "https://shopping-master-575b9.firebaseio.com",
  projectId: "shopping-master-575b9",
  storageBucket: "shopping-master-575b9.appspot.com",
  messagingSenderId: "25036640904",
  appId: "1:25036640904:web:3bfedc547496c269f4453d",
  measurementId: "G-SLGSX2L70V"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
