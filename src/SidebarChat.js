import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

function SidebarChat({addNewChat}) {

    let createChate = ()=>{
        let roomName = prompt('Enter Chate Name: ');

        if(roomName){
            
        }
    }
    return !addNewChat ? (
        <div className="sidebar__chat">
            <Avatar src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 60)}`} />
            <div className="sidebar__chatInfo">
                <h2>Room Name</h2>
                <p>Last Meassage ...</p>
            </div>
        </div>
    ):(
        <div className="sidebar__chat" onClick={createChate}>
            addNewChat
        </div>
    );
}

export default SidebarChat;
