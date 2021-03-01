import React, { Component } from 'react';
import './App.css';
import Addtion from './newComponent/Addnew'


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
      {name : "jaffar", age : '21'}
    ]
    ,toogleer : 'check more',
    flag : false
  };
  //onclick
  ChangeState = () =>{
    this.setState({
      person : [
        {name : "jaffar Abbas", age : '21'}
      ]
    })
  }
  //runtime changes
  RuntimeToggle = () =>{
    this.setState({
      flag : true
    })
  }
  //name changer
  NameChanger = (event) =>{
    this.setState({
      person : [
        {name : event.target.value, age : '21'}
      ]
      ,toogleer : 'check more',
      flag : true
    })
  }
  render(){
    return(
      <div>
        {this.state.flag === true ?
          <div>
            <Addtion name={this.state.person[0].name} age={this.state.person[0].age} toogle={this.ChangeState} newTogle={this.state.toogleer} changed={this.NameChanger} />
          </div>:null
        }
        <button onClick={this.RuntimeToggle}>Click Toggler</button>
      </div>
    )
  };
}
export default App; 



