import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
   apiKey: "AIzaSyAOXVAXomv03YkeMumgJehYipAQTgBzP44",
  authDomain: "unique-team-2c7d7.firebaseapp.com",
  databaseURL: "https://unique-team-2c7d7-default-rtdb.firebaseio.com",
  projectId: "unique-team-2c7d7",
  storageBucket: "unique-team-2c7d7.appspot.com",
  messagingSenderId: "976162793898",
  appId: "1:976162793898:web:4214f4c53099c867ffa3d3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}