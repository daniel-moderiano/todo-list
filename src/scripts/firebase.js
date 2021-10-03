import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Personal web app config
const firebaseConfig = {
  apiKey: 'AIzaSyCwW7TZ98D4x2iYBEZpA1zvMMu3mlQGn8k',
  authDomain: 'todo-list-efe09.firebaseapp.com',
  projectId: 'todo-list-efe09',
  storageBucket: 'todo-list-efe09.appspot.com',
  messagingSenderId: '760486375913',
  appId: '1:760486375913:web:122a6b666ad2fd5d7a9b78'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create firestore database
const database = getFirestore(app);

export default database;