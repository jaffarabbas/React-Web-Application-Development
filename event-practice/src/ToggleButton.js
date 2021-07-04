import React from 'react';
//button click change button state using conditions on event
class ToggleButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        //bind function setState to class so it can use 'this' if you use arrow function 
        //no need of binding
        this.handleClick = this.handleClick.bind(this);
    }
    
    //event function 
    handleClick = (e) => {
        console.log(this.state.isToggleOn)
        this.setState((state) => {
            return { isToggleOn: state.isToggleOn ? false : true };
        });
    }
    
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn?'ON':'OFF'}
                </button>
            </div>
        )
    }
}

export default ToggleButton;