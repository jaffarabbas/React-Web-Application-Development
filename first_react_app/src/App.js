import React, { Component } from 'react';
import './containers/App.css';
import Addtion from './Components/ListComponent/list'
import AddList from './Components/InsertInList/newlist';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    person : [
      {id:'1' , name : "jaffar"},
      {id:'2' , name : "Ahmed"},
      {id:'3' , name : "erwerwe"},
      {id:'4' , name : "sadas"}
    ],
    flag : false
  };

  deleteFunction = (persondelteIndex) =>{
    const person = [...this.state.person];
    person.splice(persondelteIndex,1);
    this.setState({person:person});
  } 

  EditHandler = (event,id) =>{
    const personIndex = this.state.person.findIndex(p =>{
      return p.id === id;
    });

    const persons = {
      ...this.state.person[personIndex]
    };

    persons.name = event.target.value;

    const person = [...this.state.person];

    person[personIndex] = persons;

    this.setState({person:person})
  }

  InsertNew = () => {

  }

  render(){
    return(
      <div>
      <div>
        <h1 className="text-center">Todo List</h1>
      </div>
         <div>
            <Addtion persons = {this.state.person} delete = {this.deleteFunction} changed = {this.EditHandler} />
         </div>
      </div>
    )
  };
}
export default App; 



