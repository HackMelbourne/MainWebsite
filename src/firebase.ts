import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getFunctions } from 'firebase/functions';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: 'hmwebsite-b89d5.firebaseapp.com',
  projectId: 'hmwebsite-b89d5',
  storageBucket: 'hmwebsite-b89d5.appspot.com',
  messagingSenderId: '441279518479',
  appId: '1:441279518479:web:9c31320326c4908a69907a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions();
