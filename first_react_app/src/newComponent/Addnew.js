import React from 'react';
import './Appnew.css'

const addition = (props) => {
    return (
        <div className="po">
             <h4 onClick={props.click}>Hello {props.name} {Math.floor(Math.random()*10/2)} age is {props.age}</h4>
             <button onClick={props.delete}>delete</button>
        </div>
    )
}
export default addition;