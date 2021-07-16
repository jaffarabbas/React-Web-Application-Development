import React,{Component} from 'react';
import People from './Components/peoples/people';

class App extends Component {
  state = {
    person:[
      {
        name:"jaffar",
        age:23
      }
    ]
  };
  render(){
    return (
      <People  name = {this.state.person[0].name} age = {this.state.person[0].age} />
    )
  }
}

export default App;

