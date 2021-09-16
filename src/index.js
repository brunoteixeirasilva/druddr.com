import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// FIREBASE ------------------
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCnmCFmMDtlw0-iUTPpGHLHNcTSXxQbTHk",
    authDomain: "msfinance-b8487.firebaseapp.com",
    projectId: "msfinance-b8487",
    storageBucket: "msfinance-b8487.appspot.com",
    messagingSenderId: "866402989317",
    appId: "1:866402989317:web:5e78056e506cf21e9df36c"
};

// only one instance
if (!firebase.apps[0]) {
    firebase.initializeApp(firebaseConfig);
}
// FIREBASE END ------------



ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
