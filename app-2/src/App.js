import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
    names:["sky",'kyle','ty','corey','sam','ry','jordan']
    }
  }

  

  render(){
    let namesDisplay = this.state.names.map((e) => {
      return <h1>{e}</h1>
    })
    return(
      <div className="App"> {namesDisplay} </div>
    )
  }
}
  
  export default App;
