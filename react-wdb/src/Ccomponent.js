import React, { Component } from "react";


export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.plusClick = this.plusClick.bind(this);
    this.minusClick = this.minusClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  plusClick() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }
  minusClick() {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  }
  resetClick() {
    this.setState(state => ({
      counter: 0
    }));
  }

  render() {
      return (
        <div>
          <h2>Counter = {this.state.counter}</h2>
          <button onClick={this.plusClick}>+</button>
          <button onClick={this.minusClick}>-</button>
          <button onClick={this.resetClick}>Reset</button>
        </div>
      );
  }
}
