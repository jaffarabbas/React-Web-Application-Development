import React, { Component } from 'react'
import CreateTask from '../CreateTask/CreateTask';
import TaskList from '../TaskList/TaskList';

const tasks = [];
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:[],
        };
    }
    createTask = (task) => {
        if(task.trim() === '') {
            alert('Task can\'t be empty');
            return;
        }
        tasks.push({task, isCompleted: false})
        this.setState({tasks:tasks})
    }
    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <div className="">
                    <CreateTask createTask={this.createTask}/>
                    <br/>
                    <TaskList />
                </div>
            </div> 
        )
    }
}
