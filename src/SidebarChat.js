import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import db from './firebase'
import { Link } from 'react-router-dom';

function SidebarChat({ addNewChat, name, id }) {
    const [Messages, setMessages] = useState([]);

    useEffect(() => {
        if (id) {
            db.collection('rooms')
                .doc(id).collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot(snap => setMessages(snap.docs.map(doc => doc.data())));
        }
    }, [id]);
    let createChate = () => {
        let roomName = prompt('Enter Chate Name: ');

        if (roomName) {
            db.collection('rooms').add({
                name: roomName
            });
        }
    }
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebar__chat">
                <Avatar src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 60)}`} />
                <div className="sidebar__chatInfo">
                    <h2>{name}</h2>
                    <p>{Messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div className="sidebar__chat" onClick={createChate}>
            AddNewChat
        </div>
    );
}

export default SidebarChat;
