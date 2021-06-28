import firebase from 'firebase/app'
import 'firebase/firestore'
import React from "react"
import '../styles/Message.css'

const Message = (props) => {

    return (
        <>
            {props.messages.map(msg => {
                console.log(msg)
                return(
                    <>
                        <div className='message'>{msg.text}</div>
                    </>
                )
            })}
        </>
    );
}

export default Message;
