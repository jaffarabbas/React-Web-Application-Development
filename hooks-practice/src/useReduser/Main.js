import React, { Component } from 'react'
import UserList from './Api Fetching Using Reduser/Components/UserList'
import CounterOne from './Reduser Practice/Components/CounterOne'
import CounterTwo from './Reduser Practice/Components/CounterTwo'

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>Use Reduser Simple</h1>
                <CounterOne/>
                <h1>Use Reduser Complex with objects</h1>
                <CounterTwo/>
            </div>
        )
    }
}
