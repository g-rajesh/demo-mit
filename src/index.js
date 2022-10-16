// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApohgbavNvYY1YRcuhWksNKx_pC7yjiCw",
  authDomain: "mit-demo-project.firebaseapp.com",
  databaseURL: "https://mit-demo-project-default-rtdb.firebaseio.com",
  projectId: "mit-demo-project",
  storageBucket: "mit-demo-project.appspot.com",
  messagingSenderId: "121796526807",
  appId: "1:121796526807:web:ab7a9f848b4819ab006692"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const ref = collection(db, 'CT');

addDoc(ref, { name: "Surya", regno: "2019503057" })
.then(() => {
    getDocs(ref)
    .then(ss => {
        const students = []
        ss.docs.forEach(doc => {
            students.push({ ...doc.data(), id: doc.id })
        })

        console.log(students);
    })
    .catch(err => console.log(err))
})
.catch(err => console.log(err));

