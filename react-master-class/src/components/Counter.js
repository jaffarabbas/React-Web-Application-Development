import React, { useRef, useState } from 'react'

function Counter() {
    let [number,setNumber] = useState(0);
    const num = useRef(0);

    function handleClick() {
        setNumber(number+1);
        num.current++;
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