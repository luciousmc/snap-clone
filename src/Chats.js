import React, { useState } from 'react';
import './Chats.css';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Avatar from '@material-ui/core/Avatar';
import { useEffect } from 'react';
import { auth, db } from './firebase';
import Chat from './Chat';
import { useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { resetCameraImage } from './features/cameraSlice';

function Chats() {
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();

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

    const takeSnap = () => {
      dispatch(resetCameraImage());
      history.push('/');
    };
    

    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar
                  src={user.profilePic}
                  onClick={() => auth.signOut()}
                  className="chats__avatar"
                />
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

            <RadioButtonUncheckedIcon
              className="chats__takePicIcon"
              onClick={takeSnap}
              fontSize='large'
            />
        </div>
    )
}

export default Chats
