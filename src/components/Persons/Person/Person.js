import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import "./Person.css";

class Person extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  nameChanged: PropTypes.func,
  ageChanged: PropTypes.func,
};

export default Person;

