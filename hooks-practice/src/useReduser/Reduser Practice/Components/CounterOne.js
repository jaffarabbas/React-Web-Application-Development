import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state , action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement': 
            return state - 1
        case 'reset':                          
            return initialState
        default:
            return state
    }
}

export default function CounterOne() {
    //reducer
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div><h1 className="text-center">Count : {count}</h1></div>
            <button className="btn btn-primary"onClick={() => dispatch('increment')}>Increment</button>&nbsp;
            <button className="btn btn-primary"onClick={() => dispatch('decrement')}>Decrement</button>&nbsp;
            <button className="btn btn-primary"onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}
