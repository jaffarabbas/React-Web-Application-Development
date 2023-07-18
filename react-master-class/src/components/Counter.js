import React, { useCallback, useMemo, useRef, useState } from "react";

function Counter() {
  let [number, setNumber] = useState(1);
  const num = useRef(0);

  function handleClick() {
    setNumber(number + 1);
    num.current++;
    console.log(number);
    console.log(num);
  }

  const callBackFunc = useCallback(function fib(num) {
    if (num === 1 || num === 2) {
      return 1;
    }
    return fib(num - 1) + fib(num - 2);
  }, []);
  const value = useMemo(() => callBackFunc(number), [number,callBackFunc]);

  return (
    <>
      {" "}
      {value} <br /> {number} <button onClick={handleClick}> + </button>{" "}
    </>
  );
}

export default Counter;
