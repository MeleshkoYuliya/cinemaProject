import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyCtbQLfeudStMmmkEq0m4Q0xd5PfIH2eUs",
  authDomain: "films-6ff5c.firebaseapp.com",
  databaseURL: "https://films-6ff5c.firebaseio.com",
  projectId: "films-6ff5c",
  storageBucket: "films-6ff5c.appspot.com",
  messagingSenderId: "665467669015"
};

const devConfig = {
  apiKey: "AIzaSyCtbQLfeudStMmmkEq0m4Q0xd5PfIH2eUs",
  authDomain: "films-6ff5c.firebaseapp.com",
  databaseURL: "https://films-6ff5c.firebaseio.com",
  projectId: "films-6ff5c",
  storageBucket: "films-6ff5c.appspot.com",
  messagingSenderId: "665467669015"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
