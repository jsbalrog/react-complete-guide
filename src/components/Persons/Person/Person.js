import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import "./Person.css";

class Person extends Component {
  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} who is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        Update name:{" "}
        <input
          type="text"
          onChange={this.props.nameChanged}
          value={this.props.name}
        />
        Update age:{" "}
        <input
          type="text"
          onChange={this.props.ageChanged}
          value={this.props.age}
        />
      </Aux>
    );
  }
}

export default Person;

