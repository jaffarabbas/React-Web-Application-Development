import React, { useState } from 'react'

function Counter() {
    let [number,setNumber] = useState(0);
    function handleClick() {
        setNumber(number+1);
        console.log(number);
    }
  return (
    <>
        {number}
        <button onClick={handleClick}>+</button>
    </>
  )
}

export default Counter