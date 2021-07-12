import React from 'react'

export default function CountBtn(props) {
    return (
        <div>
            {props.status ? <p>you click {props.previousCount + props.count}</p> : <p>you click {props.count}</p>}
            <button onClick={props.increment} >Click</button>
        </div>
    )
}
