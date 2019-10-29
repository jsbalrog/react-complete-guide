import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import "./Person.css";
import AuthContext from '../../../context/auth-context';

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  render() {
    return (
      <Fragment>
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} who is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        Update name:
        <input
          type="text"
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          onChange={this.props.nameChanged}
          value={this.props.name}
        />
        Update age:
        <input
          type="text"
          onChange={this.props.ageChanged}
          value={this.props.age}
        />
      </Fragment>
    );
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
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

