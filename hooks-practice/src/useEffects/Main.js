import React, { Component } from 'react'
import NewUserInfo from './Components/NewUserInfo'
import Userinfo from './Components/Userinfo'

export default class Main extends Component {
    render() {
        return (
            <div>
                {/* <Userinfo/> */}
                <NewUserInfo/>
            </div>
        )
    }
}
