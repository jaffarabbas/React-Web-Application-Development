import React, { Component } from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            Description:'',
            list: ['Male','Female'],
            gender: '',
            acceptTerms: false,
        };
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.type === 'checkbox'?event.target.checked : event.target.value});
    }
    //it is a long methos every feild have it own methos in above method i call all feild so donot need to make all this function reuse only one function using Es6
    // handleDescriptionChange = (event) => {
    //     this.setState( { Description: event.target.value});
    // }
    // handleGenderChange = (event) => {
    //     this.setState( { gender: event.target.value})
    // }
    // handleAcceptTermsChange = (event) => {
    //     this.setState( { acceptTerms: event.target.checked})
    // }
    /* 
    ************************** all name values shoul match the setState object values **************************
    */
    handleSubmit = (event) => {
        event.preventDefault();
        alert('Submition is : ' + this.state.userName + '\nGender : ' + this.state.gender + '\nDescription: ' + this.state.Description + '\nAccept Terms : ' + this.state.acceptTerms)
    }
    render() {
        return (
            <div className="formsDiv">
                <form onSubmit={this.handleSubmit}>
                <h3 className="text-center  ">Form basics</h3>
                    <label>Name</label>
                    <input className="form-control" name="userName" type="text" value={this.state.userName} onChange={this.handleChange}/>
                    <label>Gender</label>
                    <select className="form-control" name="gender" value={this.state.gender} onChange={this.handleChange}>
                    <option value="" selected disabled>Choose</option>
                    {this.state.list.map((list,index)=><option key={index} value={list}>{list}</option>)}
                    </select>
                    <label>Description</label>
                    <textarea className="form-control" name="Description" rows="3" value={this.state.Description} onChange={this.handleChange}></textarea>
                    <button className="form-control btn btn-primary mt-2" type="submit">Click</button>
                    <label>Accept Terms</label>
                    &nbsp;<input type="checkbox" name="acceptTerms" checked={this.state.acceptTerms} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default UserForm;