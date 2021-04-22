import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      text: ""
    }
  }

  handeChange(val){
    this.setState({text: val})
  }

  render(){
    return (
    <div className="App">
    <input onChange={e => this.handeChange(e.target.value)} 
    type="text" />
    <h2>{this.state.text}</h2>
    </div>
    )
  }
}

export default App