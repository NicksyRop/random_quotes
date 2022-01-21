import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component{

constructor(props){

  super(props)
  this.state ={

    advice : ''
  }

  this.fetchAdvice = this.fetchAdvice.bind(this)
}
  componentDidMount(){

    this.fetchAdvice()
  }

  fetchAdvice(){

    axios.get("https://api.adviceslip.com/advice")
    .then( (response) => {

      const { advice } = response.data.slip
     this.setState({

      advice : advice

     })
    })
    .catch( (error) => {

      console.error(error);

    })
  }


  render(){

    return(
      <div className="app">
        <div className="card">

          <h1 className="heading">{ this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Advice Me!</span>
          </button>

        </div>
      </div>
    )
  }
}

export default App;
