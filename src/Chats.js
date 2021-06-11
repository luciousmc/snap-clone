import React, { useState } from 'react';
import './Chats.css';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Avatar from '@material-ui/core/Avatar';
import { useEffect } from 'react';
import { db } from './firebase';
import Chat from './Chat';

function Chats() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
          .orderBy('timestamp', 'desc')
          .onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data()
            })))
          })
    }, [])
    
    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar className="chats__avatar" />
                <div className="chats__search">
                    <SearchIcon />
                    <input type="text" name="friends" placeholder="Friends" id="" />
                </div>
                <ChatBubbleIcon className="chats__chatIcon" />
            </div>

            <div className="chats__posts">
                {posts.map(({id, data: { imageURL, username, profilePic, timestamp, read }}) => (
                  <Chat
                    key={id}
                    id={id}
                    imageURL={imageURL}
                    username={username}
                    profilePic={profilePic}
                    timestamp={timestamp}
                    read={read}
                  />
                ))}
            </div>
        </div>
    )
}

export default Chats
