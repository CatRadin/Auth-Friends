import axios from 'axios';
import { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//Initial Values ----------------------------------------------------------
const initFriendValues = {
    name: '',
    age: null,
    email: ''
}


export default function Friends(){
    const [friends, setFriends] = useState([]);
    const [addFriend, setAddFriend] = useState([false]);
    const [newFriend, setNewFriend] = useState(initFriendValues);

    useEffect(() => {
        axiosWithAuth().get('/api/friends/')
        .then(res => {
            setFriends(res.data);
        })
    }, []);

    const submitFriend = () => {
        
    }

    return(
        <div>
            {
                friends.map(friend => {
                    return (
                        <div>
                            <p>Name: {friend.name}</p> <br />
                            <p>Age: {friend.age}</p> <br />
                            <p>Email: {friend.email}</p>
                        </div>
                    )
                })
            }
            {
                addFriend && <form onSubmit={submitFriend}>
                    <input
                    type=""
                    name="name"
                    placeholder='Name'>
                    </input>
                    <input
                    type=""
                    name="age"
                    placeholder='Age'>
                    </input>
                    <input
                    type=""
                    name="email"
                    placeholder='Email'>
                    </input>
                
                    
                </form>
            }
            <button onClick={() => setAddFriend(true)}>Add New Friend</button>
        </div>
    )
}