import React, { Component } from 'react'
import '../TaskList/css/TaskList.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.taskItem.task,
            isEditing: false,
        };
    }
    setEditingState = (isEditing) => {
        this.setState({ isEditing: isEditing })
    }
    //is done or not 
    toggleTask = () => {
        this.props.toggleTask(this.props.id);
    }
    //delete
    deleteTask = () => {
        this.props.deleteTask(this.props.id)
    }
    //edit
    handleEditChange = (event) => {
        this.setState({
            task: event.target.value,
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.editTask(this.props.id,this.state.task);
        this.setState({isEditing: false,});
    }
    detailList = () => {
        this.props.detailList(this.props.id)
    }
    render() {
        return (
            <tr>
                {this.state.isEditing?
                    (
                        <>
                            <td>
                                <form onSubmit={this.handleSubmit}>
                                    <input className="form-control" value={this.state.task} onChange={this.handleEditChange} autoFocus />
                                </form>
                            </td>
                            <td>
                                <button onClick={this.handleSubmit} type="submit" className="crudBtn btn btn-primary">Save</button>&nbsp;
                                <button onClick={() => this.setEditingState(false)} className="crudBtn btn btn-danger">back</button>
                            </td>
                        </>
                    ) :
                    (
                        <>
                            <td onClick={this.toggleTask} className="list_row">
                                <input className="checkList" type="checkbox" readonly checked={this.props.taskItem.isCompleted}/>
                                &nbsp;
                                <span className={this.props.taskItem.isCompleted?'completeTask':'task_not_completed'}>
                                    {this.props.taskItem.task}
                                </span>
                            </td>
                            <td>
                                <button onClick={() => this.setEditingState(true)} className="crudBtn btn btn-primary">Edit</button>&nbsp;
                                <button onClick={this.deleteTask} className="crudBtn btn btn-danger">Delete</button>&nbsp;
                                <button onClick={this.detailList} className="crudBtn btn btn-danger">Detail</button>
                            </td>
                        </>
                    )
                }
            </tr>
        )
    }
}
