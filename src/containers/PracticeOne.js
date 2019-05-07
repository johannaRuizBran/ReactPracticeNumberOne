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

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }

  render() {    
    const characterList = this.state.userInput.split('').map((char, index) => {
      return <Character 
        character={char} 
        key={index}
        clicked={() => this.deleteCharHandler(index)}/>;
    });

    return (
      <div className="content">
        <input 
          type="text" 
          className="form-control" 
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