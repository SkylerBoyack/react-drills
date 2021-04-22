import React, {Component} from 'react';
import ToDo from "./ToDo";

class List extends Component{
    render(){
        let list = this.props.tasks.map((e,i)=>{
            return <ToDo key ={i} task={e}/>
        })
        return<div>{list}</div>
    }
}

export default List