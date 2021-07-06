import React, { Component } from 'react'
import Greeting from './Greeting';
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton';

export default class LoginControl extends Component {
    //defining state in our class component
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    //login function
    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }
    //logout function
    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }
    render() {
        //a variable that take a component referense
        let button;
        if (this.state.isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {button}
                {this.props.hasNewMessage && <h2>You have new message</h2>}
                {this.props.credits > 0 ? <h4>You have {this.props.credits}</h4>:<h4>You have No Credits</h4>}
                {this.props.Warning ? <h4>Alert!!!!!</h4>:null}
            </div>
        )
    }
}
