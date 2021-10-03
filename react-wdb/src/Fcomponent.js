import React, { Component } from "react";

export default class Fncomponent extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {
      return (
        <div>
          <h1>Input1:</h1>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}
          />
        </div>
      );
    }
  }
