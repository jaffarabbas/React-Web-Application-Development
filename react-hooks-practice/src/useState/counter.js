import React, { useState } from 'react'

const Counter = () => {
    const [counter,useCounter] = useState(0);

    const Change = () => {
      let num = counter;
      num++;
      useCounter(num);
    }
  return (
    <div>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={Change}>Click</button>
    </div>
  )
}

export default Counter