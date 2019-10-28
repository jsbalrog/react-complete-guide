import React from 'react';
import Person from './Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
 
const persons = (props) => {
  return props.persons.map((person, index) => {
    return (
        <ErrorBoundary key={person.id}>
        <Person 
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            nameChanged={(event) => props.nameChanged(event, person.id)}
            ageChanged={(event) => props.ageChanged(event, person.id)} 
        />
        </ErrorBoundary>
    );
  });
}

export default persons;