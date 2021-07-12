import React, { Component } from 'react'
import CountBtn from './CountBtn';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            status: false,
        }
    }
    increment = () => {
        this.setState({
            count:this.state.count+1,
        })
    }
    render() {
        return (
            <div>
                <CountBtn status={this.state.status} count={this.state.count} increment={this.increment}/>
            </div>
        )
    }
}
