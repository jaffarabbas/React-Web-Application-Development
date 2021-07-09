import React, { Component } from 'react'
import TaskItem from './TaskItem'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default class TaskList extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tasks.map((task,index) => (
                        <TaskItem 
                            key={index} 
                            taskItem={task} 
                            id={index} 
                            deleteTask={this.props.deleteTask} 
                            editTask={this.props.editTask}
                            toggleTask = {this.props.toggleTask}    
                        />
                    ))}
                </tbody>
            </table>
        )
    }
}
