import React from 'react';

const person = (props) => {
    return(
        <div>
            <p>Jaffar here</p>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <button onClick={props.click}>Click me</button>
        </div>
    )
}

export default person;