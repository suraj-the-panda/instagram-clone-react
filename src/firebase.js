import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBuEw4oiZdumszEsRAJPVQgNw2T3LBnnj0",
    authDomain: "instagram-clone-react-af830.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-af830.firebaseio.com",
    projectId: "instagram-clone-react-af830",
    storageBucket: "instagram-clone-react-af830.appspot.com",
    messagingSenderId: "520811019282",
    appId: "1:520811019282:web:d61a1dcc2a2205e9f32ccb",
    measurementId: "G-8G7S7C9R57"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

