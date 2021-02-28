import React from 'react';
import './Appnew.css'

const addition = (props) => {
    return (
        <div className="po">
             <h1 onClick={props.click}>Hello {props.name} {Math.floor(Math.random()*10/2)} age is {props.age}</h1>
             <h1>{props.children}</h1>
             <input type="text" onChange={props.changed}/>
        </div>
    )
};

export default addition;