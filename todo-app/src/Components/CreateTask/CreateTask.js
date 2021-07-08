import React, { Component } from 'react'

export default class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        }
    }
    handleInputChange = (event) => {
        this.setState({
            task: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(this.props.createTask);
        this.setState({task: '',});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.task} placeholder="Enter a Todo" onChange={this.handleInputChange} autoFocus/>
                <button type="submit">Add</button>
            </form>
        )
    }
}
