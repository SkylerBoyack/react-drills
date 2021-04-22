import React, {Component} from 'react'

class Img extends Component{
    constructor(){
        super()
        this.state = {
            image: <img src="https://cdn.ndtv.com/tech/images/gadgets/pikachu_hi_pokemon.jpg"/>
        }
    }
    render(){
        return(
            <div className="Img"> {this.state.image} </div>
        )
    }
}

export default Img