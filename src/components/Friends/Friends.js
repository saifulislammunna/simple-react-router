import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css';
const Friends = () => {
    const [friends, setUsers] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])
    return (
        <div>
            <h2>I have friends: {friends.length}</h2>
            <div className="friend-container">
            {
               friends.map(friend => <Friend
               key = {friend.id}
               friend = {friend} >
                 
               </Friend>) 
            }
            </div>
        </div>
    );
};

export default Friends;