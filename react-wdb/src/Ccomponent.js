import React, { Component } from "react";


export default class Ccomponent extends Component {
  render() {
    return (
      <div>
        <h2>Class component, {this.props.name}</h2>
      </div>
    );
  }
}

Ccomponent.defaultProps = {name: "Zhivotnoye"}

