import React, { Component } from "react";
import "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    // Special property in classes that extend Component
    this.state = {
      persons: [
        {
          id: "1",
          name: "Max",
          age: 28
        },
        {
          id: "2",
          name: "Manu",
          age: 29
        },
        {
          id: "3",
          name: "Stephanie",
          age: 26
        }
      ],
      otherState: "Some other value",
      showPersons: false,
      changeCounter: 0,
    };
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]; // Copy the full array, since it's a reference. Don't mutate the original.
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

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

    this.setState((prevState, props) => {
      return {
        persons: personsCopy,
        changeCounter: this.state.changeCounter + 1
      }
    });
  };

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
    this.setState({
      persons: personsCopy
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            nameChanged={this.nameChangedHandler}
            ageChanged={this.ageChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
          title={this.props.appTitle}
        />
        {persons}
      </div>
    );
  }
}

export default App;
