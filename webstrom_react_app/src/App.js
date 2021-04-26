import React , {Component} from "react";
import Check from "./Components/check";

class App extends Component{
  state = {
    name : "jaffar abbas"
  }
  render() {
    return(
        <Check name = {this.state.name}></Check>
    );
  }
}


export default App;
