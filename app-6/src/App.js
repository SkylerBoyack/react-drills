import React, {Component} from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component{
  constructor(props){
    super(props)
     this.state = {
      taskInput:'',
      todoList: []
     }
     this.taskAdder = this.taskAdder.bind(this)
  }

  handleChange(val){
    this.setState({taskInput: val})
  }

  taskAdder(){
    this.setState({
      todoList: [...this.state.todoList, this.state.taskInput],
      taskInput: ""
    });
}

  render() {
  let todoList = this.state.todoList.map((element, index) => {
    return <Todo key={index} task={element} />;
  });

  return (
    <div className="App">
      <h1>My to-do list:</h1>

      <div>
        <input
          value={this.state.taskInput}
          placeholder="Enter new task"
          onChange={e => this.handleChange(e.target.value)}
        />

        <button onClick={this.taskAdder}>Add</button>
      </div>

      

     {todoList}
    </div>

    )
  }

}

export default App;
