import React from 'react';

class Clock extends React.Component {
    //adding constructor for set a state value
    constructor(props) {
        super(props);
        //set the state
        this.state = {
            date: new Date()
        }
    };
    //mounting the time for the livecycling method
    componentDidMount(){
        this.timerId = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },1000)
    }
    //to clear the mount after page refreshed
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    render(){
        return(
            <h1>{this.state.date.toLocaleString()}</h1>
        )
    }
}

export default Clock;