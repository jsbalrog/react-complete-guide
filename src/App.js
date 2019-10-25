import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  // Special property in classes that extend Component
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 },
    ],
    otherState: 'Some other value',
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; // Copy the full array, since it's a reference. Don't mutate the original.
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    // Get the index of the person under question
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Using that index, get the person from the persons array
    const updatedPerson = {
      ...this.state.persons[personIndex]
    };

    // Change the name to what the new value is
    updatedPerson.name = event.target.value;

    const personsCopy = [...this.state.persons]; // Copy the array
    personsCopy[personIndex] = updatedPerson; // Update it with the new person

    this.setState({ persons: personsCopy});
  }

  ageChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const updatedPerson = {
      ...this.state.persons[personIndex]
    };
    updatedPerson.age = event.target.value;
    const personsCopy = [...this.state.persons];
    personsCopy[personIndex] = updatedPerson;
    this.setState({ persons: personsCopy })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              nameChanged={(event) => this.nameChangedHandler(event, person.id)}
              ageChanged={(event) => this.ageChangedHandler(event, person.id)} />
          })}
        </div>  
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style} 
          onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
          {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
