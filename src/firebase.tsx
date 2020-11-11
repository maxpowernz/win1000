import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmhwgyjipzkpBPXQsvCr788N3vTHBWxAM",
    authDomain: "partyapp-be1a2.firebaseapp.com",
    databaseURL: "https://partyapp-be1a2.firebaseio.com",
    projectId: "partyapp-be1a2",
    storageBucket: "partyapp-be1a2.appspot.com",
    messagingSenderId: "677895392274",
    appId: "1:677895392274:web:01cbad556c44c4df029ccb",
    measurementId: "G-TXPK1X2TW0"
});

const db = firebaseApp.firestore();
export default db;