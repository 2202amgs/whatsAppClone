import React, {useState, useEffect} from 'react';
import './Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import {SearchOutlined, AttachFile, MoreVert, Mic, InsertEmoticon} from '@material-ui/icons'


function Chat() {
    const [msg, setMsg] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()* 20));
    }, [seed]);

    const sendMsg = (e) => {
        e.preventDefault();
        console.log(msg)

        setMsg("");
    }
    return (
        <div className="chat">
            <div className='chat__header'>
                <Avatar src={`https://i.pravatar.cc/150?img=${seed}`}/>
                <div className='chat__headerInfo'>
                    <h3>Room Name</h3>
                    <p>Last seen .....</p>
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
                <p className='chat__message chat__reciever'>
                    <span className='chat__name'>samir</span>Hey guys<span className='chat__timestamp'>2:15 pm</span>
                </p>
                <p className='chat__message'>
                    <span className='chat__name'>samir</span>Hey guys<span className='chat__timestamp'>2:15 pm</span>
                </p>
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
