import React, { Component } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../CreateTask/css/CreateTask.css"

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
        this.props.createTask(this.state.task);
        this.setState({task: '',});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="create_input form-control" type="text" value={this.state.task} placeholder="Enter a Todo" onChange={this.handleInputChange} autoFocus/>
                <button className="create_btn form-control btn" type="submit">Add</button>
            </form>
        )
    }
}
