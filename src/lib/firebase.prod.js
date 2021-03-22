import Firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3TjSyMOFO9RfsjjpZfAKbcnUunFDQTI0',
  authDomain: 'inn7shop-ecom.firebaseapp.com',
  projectId: 'inn7shop-ecom',
  storageBucket: 'inn7shop-ecom.appspot.com',
  messagingSenderId: '889830809198',
  appId: '1:889830809198:web:2709ee42b9a5743ed9d07f',
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

export default firebase;
