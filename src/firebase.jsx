import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

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
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider };
