import React, { Component } from 'react';
import Person from './Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
 
class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate:', snapshot);
  }

  render() {
    console.log('[Persons.js] render');
    return this.props.persons.map((person, index) => {
      return (
          <ErrorBoundary key={person.id}>
          <Person 
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              nameChanged={(event) => this.props.nameChanged(event, person.id)}
              ageChanged={(event) => this.props.ageChanged(event, person.id)} 
          />
          </ErrorBoundary>
      );
    });
  }
}

export default Persons;