import React, { Component } from 'react';
import Character from '../components/Character';
import '../style/style.css';

class PacticeOne extends Component {
  state = {
    userInput: ''   
  }

  inputChangeHandler = (event) => {                                   
      this.setState({ userInput: event.target.value });
  }

  render() {    
    const characterList = this.state.userInput.split('').map((char, index) => {
      return <Character character={char} key={index}/>;
    });

    return (
      <div className="content">
        <input 
          type="text" 
          class="form-control" 
          onChange={this.inputChangeHandler}  
          value={this.state.userInput}
        />
        <br/>
        {this.state.userInput}<br/>
        {characterList}
      </div>
    );
  }
}

export default PacticeOne;