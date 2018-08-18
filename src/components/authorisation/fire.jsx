import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCtbQLfeudStMmmkEq0m4Q0xd5PfIH2eUs",
    authDomain: "films-6ff5c.firebaseapp.com",
    databaseURL: "https://films-6ff5c.firebaseio.com",
    projectId: "films-6ff5c",
    storageBucket: "films-6ff5c.appspot.com",
    messagingSenderId: "665467669015"
  };
  const fire=firebase.initializeApp(config);
  export default fire;