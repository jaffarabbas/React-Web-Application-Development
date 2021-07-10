import React, { Component } from 'react'
import CreateTask from '../CreateTask/CreateTask';
import TaskList from '../TaskList/TaskList';
import "../Container/css/Main.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const tasks = [];
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        };
    }
    //create
    createTask = (task) => {
        if (task.trim() === '') {
            alert('Task can\'t be empty');
            return;
        }
        tasks.push({ task, isCompleted: false })
        this.setState({ tasks: tasks })
    }
    //delete
    deleteTask = (taskId) => {
        tasks.splice(taskId, 1);
        this.setState({ tasks: tasks });
    }
    //edit
    editTask = (taskId, task) => {
        const taskItem = tasks[taskId];
        taskItem.task = task;
        this.setState({
            tasks: tasks,
        });
    }
    //complete task
    toggleTask = (taskId) => {
        const taskItem = tasks[taskId];
        taskItem.isCompleted = !taskItem.isCompleted;
        this.setState({ tasks: tasks });
    }
    //detial
    detailList = (taskId) => {
        console.log(this.state.tasks[taskId])
        alert(this.state.tasks[taskId].task)
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                {/* col-auto col-sm-auto col-md-auto */}
                    <div className="">
                        <h1 className="todo-header">Todo App</h1>
                        <div className="form_container">
                            <CreateTask createTask={this.createTask} />
                            <TaskList
                                tasks={this.state.tasks}
                                deleteTask={this.deleteTask}
                                editTask={this.editTask}
                                toggleTask={this.toggleTask}
                                detailList={this.detailList}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
