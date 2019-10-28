import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} who is {props.age}</p>
            <p>{props.children}</p>
            Update name: <input type="text" onChange={props.nameChanged} value={props.name} />
            Update age: <input type="text" onChange={props.ageChanged} value={props.age} />
        </div>
    );
};

export default person;