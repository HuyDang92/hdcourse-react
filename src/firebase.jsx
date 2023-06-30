// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAHH3ikO0vhGooIIgAn3DiFK3CimXVr5gE',
  authDomain: 'hdcourse-10020.firebaseapp.com',
  projectId: 'hdcourse-10020',
  storageBucket: 'hdcourse-10020.appspot.com',
  messagingSenderId: '69417015601',
  appId: '1:69417015601:web:ee1191e56ca958a23f7810',
  measurementId: 'G-LXDY4Q27TV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
