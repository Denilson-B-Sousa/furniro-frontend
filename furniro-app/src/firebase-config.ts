/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyATwSgKJrB7q__-7A7k30dwEUSRxIwsolE',
  authDomain: 'furniro-app-70f78.firebaseapp.com',
  projectId: 'furniro-app-70f78',
  storageBucket: 'furniro-app-70f78.appspot.com',
  messagingSenderId: '533923909312',
  appId: '1:533923909312:web:dffc9b8dc68e604c52e725',
  measurementId: 'G-CRM7W9N541',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db=getFirestore(app);
const analytics = getAnalytics(app);
