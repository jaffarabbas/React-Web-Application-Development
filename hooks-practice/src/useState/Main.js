import React, { Component } from 'react'
import Counter from './Components/Counter'
import NewCounter from './Components/NewCounter';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading1:'Class Component setState function',
            heading2:'Functional Component useState function',
        }
    }
    render() {
        return (
            <div>
                <h4>{this.state.heading1}</h4>
                <Counter/>
                <h4>{this.state.heading2}</h4>
                <NewCounter/>
            </div>
        )
    }
}
