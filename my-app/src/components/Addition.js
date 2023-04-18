import React, { Component } from 'react';

class Addition extends Component {
  
  state = {
    result: this.props.number1 + this.props.number2
  }

  componentDidUpdate(prevProps){
    console.log(prevProps.number1);
    console.log(this.props.number1);
    if((prevProps.number1 !== this.props.number1) || (prevProps.number2 !== this.props.number2)){
      const answer = this.props.number1 + this.props.number2;
      this.setState({result: answer});
    }
    
  }

  render() {
    
    return (
      <div data-testid="addition" className="App">
        {/* <p>{this.props.number1}</p>
        <p>{this.props.number2}</p> */}
        <h1>Result</h1>
        <p data-testid="answer">{this.state.result}</p>
      </div>
    );
  }
}

export default Addition;
