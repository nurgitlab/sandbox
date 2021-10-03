import React, { Component } from "react";


export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.buttonPush = this.buttonPush.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  buttonPush(event) {
    event.preventDefault();//обработчик отправки
    this.setState({
      input: this.state.input,
      items: [...this.state.items, this.state.input],
    });
    this.setState({
      input: "",
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.buttonPush}>
          <input
            value={this.state.input}
            onChange={this.handleChange}/>

          <button
            type={"output"}
          >
            Push
          </button>
        </form>

        <ul>
          {this.state.items.map((item, index) => {
            return (
              <p>
                <li key={item}>{item}</li>
              </p>
            );
          })}
        </ul>
      </div>
    );
  }
}
