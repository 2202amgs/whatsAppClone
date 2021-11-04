import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert, Mic, InsertEmoticon } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { useStateValue } from './StateProvider'
import firebase from "firebase/compat";


function Chat() {
    const [msg, setMsg] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }] = [...useStateValue()];


    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snap => (setRoomName(snap.data().name)));

            db.collection('rooms').doc(roomId)
                .collection('messages').orderBy('timestamp', 'asc')
                .onSnapshot(snap => setMessages(snap.docs.map(doc => doc.data())));
        }
    }, [roomId, roomName]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 20));
    }, []);

    const sendMsg = (e) => {
        e.preventDefault();
        if (msg) {
            db.collection('rooms').doc(roomId)
                .collection('messages')
                .add({
                    name: user.displayName,
                    message: msg,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
        }
        setMsg("");
    }
    return (
        <div className="chat">
            <div className='chat__header'>
                <Avatar src={`https://i.pravatar.cc/150?img=${seed}`} />
                <div className='chat__headerInfo'>
                    <h3>{roomName}</h3>
                    <p>Last seen {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
                {messages.map(msg => (
                    <p className={`chat__message ${user.displayName === msg.name && "chat__reciever"}`}>
                        <span className='chat__name'>{msg.name}</span>
                        {msg.message}
                        <span className='chat__timestamp'>
                            {new Date(msg.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
            </div>
            <div className='chat__footer'>
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input
                        type='text'
                        placeholder='This is your message...'
                        value={msg}
                        onChange={e => setMsg(e.target.value)}
                    />
                    <button type='submit' onClick={sendMsg}>send</button>
                </form>
                <IconButton>
                    <Mic />
                </IconButton>
            </div>
        </div>
    );
}
export default Chat;
