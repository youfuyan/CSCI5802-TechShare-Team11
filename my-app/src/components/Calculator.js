import React, { Component } from "react";
import Addition from "./Addition";

class Calculator extends Component {
  state = {
    number1: 0,
    number2: 0,
  };

  updateNumber1(e){
    this.setState({number1: +e.target.value});
    console.log("hi");
  }

  updateNumber2(e){
    console.log("hello");
    this.setState({number2: +e.target.value});
  }

  render() {
    return (
    
      <div data-testid="calculator" className="App">
        <input data-testid="number1" type="number" onChange={(e) => this.updateNumber1(e)}></input>
        <p>+</p>
        <input data-testid="number2" type="number" onChange={(e) => this.updateNumber2(e)}></input>
        <Addition number1={this.state.number1} number2={this.state.number2}></Addition>
      </div>
      
      
    );
  }
}

export default Calculator;
