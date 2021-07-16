import React, { useEffect, useReducer } from 'react'
import './css/UserList.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'USERS_REQUEST':
            return { ...state, loading: true };
        case 'USERS_SUCCESS':
            return { ...state, users: action.payload, loading: false , error:''};
        case 'USERS_FAIL':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}
export default function UserList() {
    const [state, dispatch] = useReducer(reducer, { loading: false, users: [], error: '' });
    const { loading, error, users } = state;
    const loadUsers = async () => {
        dispatch({ type: 'USERS_REQUEST' });
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(data)
            dispatch({ type: 'USERS_SUCCESS', payload: data });
            console.log('dispatch: ' + data)
        } catch (error) {
            dispatch({ type: 'USERS_ERROR', payload: error.message });
        }
    }
    //fetching data on refresh
    useEffect(() => {
        console.log('func will')
        loadUsers();
        console.log('func runed')
    }, [])

    return (
        <div>
            <h1>Users</h1>
            <div>
                <button onClick={loadUsers} className="btn btn-primary">Reload</button>
            </div>
            {loading ? (<div>
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                        </div>
                    </div>
                    <p className="text-center">Loading Users...</p>
                 </div>)
                : (error ? (<div>Error : {error}</div>)
                    : (<table className="table">
                        <thead>
                            <tr>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.name}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.website}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>)
                )
            }
        </div>
    )
}
