import firebase from 'firebase';

import { firebaseConfig } from './data';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.2.6/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>