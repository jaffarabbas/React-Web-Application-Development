import React, { Component } from 'react';
import './App.css';
import Addtion from './Components/ListComponent/list'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const Compi = props => {
//   const [user,setUser] = useState( {
//     person:[
//       {
//         name : 'jaffar',
//         age :'21'
//       },
//     ],
//     flag:false
//   });

//   const [NewCom,SetNewCom] = useState("1111");

//   const ClickHandler = (NewName) => {
//     console.log("hello handler");
//     setUser({
//       person : [{
//         name : NewName,
//         age : NewCom
//       }]
//       ,flag : true,
//     });
//   };

//   const NameChangehandler = (event) => {
//     setUser({
//       person : [{
//         name : event.target.value,
//         age : NewCom
//       }],
//       flag : true,
//     });
//   };

//   const toggleButton = () => {
//     const Showflag = user.flag;
//     setUser({
//       person:[
//         {
//           name : 'jaffar',
//           age :'21'
//         },
//       ],
//       flag : true,
//     });
//   }

//   return(
//     <div className="App">
//      <button onClick={toggleButton}>Click</button>
//      { user.flag === true?
//       <div>
//         <Addtion changed={NameChangehandler} name={user.person[0].name}  age={user.person[0].age} click={() => ClickHandler("Ahmed AMin")}>This Is Childern Of Component</Addtion>
//         <button onClick={ClickHandler.bind(this,'NewParamter')}>Click for Handle</button>
//       </div> : null
//      }
//     </div>
//   )
// };
  
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
      return p.id == id;
    });

    const persons = {
      ...this.state.person[personIndex]
    };

    persons.name = event.target.value;

    const person = [...this.state.person];

    person[personIndex] = persons;

    this.setState({person:person})
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



