import firebase from 'firebase';
import 'firebase/firestore';
const serviceAccount = require('~/serviceAccountKey.json');

if (!firebase.apps.length) {
  firebase.initializeApp({ ...serviceAccount });
}

const db = firebase.firestore();

export { db }
