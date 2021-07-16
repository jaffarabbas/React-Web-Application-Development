import React,{useEffect, useState} from 'react'

export default function NewUserInfo() {
    const [user,setUser] = useState({});
    const [userId,SetUserId] = useState(1);

    const userChange = (event) => {
        SetUserId(event.target.value);
    }
    //for fetching data from backend
    useEffect(()=>{
        console.log('use Effects runs')
        fetch('https://jsonplaceholder.typicode.com/users/'+userId)
        .then((response) => response.json())
        .then((data) => {
            setUser(data);
        });
        return () => {
            console.log('clean up.')
        }
    },[userId])
    return (
        <div>
            <h4>User Id with UseEffect: </h4>
            <input type="text" value={userId} onChange={userChange} />
            <br/>
            Name: {user.name}
            <br/>
            Email: {user.email}
        </div>
    )
}
