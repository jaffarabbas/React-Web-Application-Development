import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Api = () => {
    const [token, setToken] = useState([])
    const [users, setUsers] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        // setUsers([{ "email": event.target.email.value, "password": event.target.password.value }]);
        await fetch("https://jzbookstore.azurewebsites.net/api/account/login",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "email": event.target.email.value, "password": event.target.password.value })
            }).then(data => data.text()).then(data => setToken(JSON.stringify(data))).then(() => {
                fetch("https://jzbookstore.azurewebsites.net/api/book/",
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token
                        }
                    }).then(data => data.json()).then(data => setUsers(data));
            });
    }
    return (
        <div>
            <h1>Api calling</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col align-self-center w-100'>
                        <form onSubmit={handleSubmit} className='form mt-4'>
                            <input className='form-control' type="text" name="email" placeholder="email" /><br />
                            <input className='form-control' type="password" name="password" placeholder="password" /><br />
                            <input className='form-control btn btn-success' type="submit" name='Submit' value='submit' />
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <div className='col align-self-center w-100'>
                        {console.log(users)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Api