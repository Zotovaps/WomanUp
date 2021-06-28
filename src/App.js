import MessagesScreen from './components/MessagesScreen'
import firebase from 'firebase/app'
import 'firebase/firestore'
import React from 'react'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDgV7p1mwM7awthVPGFtSkBaw2sJqSGMMo",
        authDomain: "live-chat-bfd6b.firebaseapp.com",
        projectId: "live-chat-bfd6b",
        storageBucket: "live-chat-bfd6b.appspot.com",
        messagingSenderId: "895095270157",
        appId: "1:895095270157:web:4813836619251df3b49e44"
    })
}

const db = firebase.firestore()

function App() {
    return (
        <MessagesScreen db={db}/>
    );
}

export default App;
