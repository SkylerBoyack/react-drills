import React, {Component} from 'react'

class Login extends Component{
    constructor(props){
      super(props)
        this.state = {
        username: '',
        password: ''
        }
  
        this.buttonAlert = this.buttonAlert.bind(this)
    }
  
    displayUser(val){
      this.setState({username: val})
    }
  
    displayPassword(val){
      this.setState({password:val})
    }
  
    buttonAlert(val){
     alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
  
    render(){
      return(
        <div className="App">
         <input className="username" onChange={(e) => this.displayUser(e.target.value)} type = "text"/>
         <input className="password" onChange={(e) => this.displayPassword(e.target.value)} type = "text"/>
         <button onClick={this.buttonAlert}>Login</button>
        </div>
      )
    }
  
  
  }
  
  export default Login