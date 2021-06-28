import firebase from 'firebase/app'
import 'firebase/firestore'
import React, {useEffect, useState} from "react"
import {useFormInput} from '../Utils/Hook'
import Message from "./Message"
import '../styles/MessagesScreen.css'

const MessagesScreen = ({db = null}) => {
    const [messages, setMessages] = useState([])
    const msgText = useFormInput('')

    useEffect(() => {
        if (db) {
            const s = db.collection('messages').orderBy('sentAt').limit(100).onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    })
                )
                setMessages(data)
            })
            return s
        }
    }, [db])

    const sendMessage = () => {
        if (db) {
            db.collection('messages').add({
                text: msgText.value,
                sentAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        }

        msgText.setValue('')
    }

    return (
        <div className='Chat'>
            <div className='Header'>Онлайн чат</div>
            <div className='MessagesField'>
                <Message messages={messages}/>
            </div>

            <div className='InputBlock'>
                <textarea value={msgText.value} onChange={(e) => {
                    msgText.onChange(e)
                }}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default MessagesScreen;
