import React, { Component } from 'react';
import '../style/style.css';

class PracticeTwo extends Component {
  state = {
    text: 'Practice Two'
  }

  render() {        

    return (
      <div className="content">        
        {this.state.text}
      </div>
    );
  }
}

export default PracticeTwo;