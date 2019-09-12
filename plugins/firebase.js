import firebase from 'firebase';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.firebase.apiKey,
    authDomain: process.env.firebase.authDomain,
    databaseURL: process.env.firebase.databaseURL,
    projectId: process.env.firebase.projectId,
    storageBucket: process.env.firebase.storageBucket,
    messagingSenderId: process.env.firebase.messagingSenderId,
    appId: process.env.firebase.appId
  });
}

const db = firebase.firestore();

export { db }
