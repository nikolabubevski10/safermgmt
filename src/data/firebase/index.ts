import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDnFLy02K8m69O3ySJB98qgdu10f_7Dn7M',
  authDomain: 'safr-sandbox.firebaseapp.com',
  databaseURL: 'https://safr-sandbox.firebaseio.com',
  projectId: 'safr-sandbox',
  storageBucket: 'safr-sandbox.appspot.com',
  messagingSenderId: '364839686605',
  appId: '1:364839686605:web:bfddb80c3a43a50ff33484',
  measurementId: 'G-2MYT85ECDL',
};

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

initFirebase();

const auth = firebase.auth();
const storage = firebase.storage();
const firestore = firebase.firestore();

export { auth, storage, firestore, firebase as default };
