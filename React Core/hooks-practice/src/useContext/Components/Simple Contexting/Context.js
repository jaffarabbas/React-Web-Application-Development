import React, { useEffect, useState } from 'react'

const {Provider , Consumer} = React.createContext();

function Context(props) {
    const [user,setUser] = useState({});

    //for fetching data from backend
    useEffect(()=>{
        console.log('use Effects runs')
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((data) => {
            setUser(data);
        });
        return () => {
            console.log('clean up.')
        }
    },[])
 
    return (
        <Provider value={user}>
            {props.children}
        </Provider>
    )
}

export {Context,Consumer}