import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        drinks: ['Coke','MTD','DrPepper','A&W','Jones','RedBull','Rockstar'],
       filterString:''
    }
  }

  handleChange(val){
    this.setState({filterString:val})
  }

  render() {
    let drinksToDisplay = this.state.drinks
      .filter((e) => {
        return e.includes(this.state.filterString);
      })
      .map((e, i) => {
        return <h2 key={i}>{e}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {drinksToDisplay}
      </div>
    );
  }
}


export default App;
