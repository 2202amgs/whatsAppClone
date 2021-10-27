import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebar__chat">
            <Avatar src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 60)}`} />
            <div className="sidebar__chatInfo">
                <h2>Room Name</h2>
                <p>Last Meassage ...</p>
            </div>
        </div>
    )
}

export default SidebarChat;
