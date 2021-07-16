import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0
}
const reducer = (state , action) => {
    switch (action.type) {
        case 'increment':
            return {firstCounter : state.firstCounter + action.value}
        case 'decrement': 
            return {firstCounter : state.firstCounter - action.value}
        case 'reset':                          
            return initialState
        default:
            return state
    }
}

export default function CounterTwo() {
    //reducer
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div><h1 className="text-center">Count : {count.firstCounter}</h1></div>
            <button className="btn btn-primary"onClick={() => dispatch({type: 'increment'})}>Increment</button>&nbsp;
            <button className="btn btn-primary"onClick={() => dispatch({type: 'decrement'})}>Decrement</button>&nbsp;
            <button className="btn btn-primary"onClick={() => dispatch({type: 'increment' , value : 5})}>Increment</button>&nbsp;
            <button className="btn btn-primary"onClick={() => dispatch({type: 'decrement' , value : 5})}>Decrement</button>&nbsp;
            <button className="btn btn-primary"onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}
