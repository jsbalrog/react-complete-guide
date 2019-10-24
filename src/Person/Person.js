import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} who is {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;