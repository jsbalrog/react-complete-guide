import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media(min-width: 500px)' : {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} who is {props.age}</p>
            <p>{props.children}</p>
            Update name: <input type="text" onChange={props.nameChanged} value={props.name} />
            Update age: <input type="text" onChange={props.ageChanged} value={props.age} />
        </div>
    );
};

export default Radium(person);