import React, { memo } from 'react'

//for component memoization
const CLickButton = memo(
  function CLickButton({message,children,onClick}){
    console.log("rendered");
      function handleClick() {
          console.log(message ?? '');
          onClick();
      }
    return (
      <button style={{backgroundColor: 'red'}} onClick={handleClick}>{children}</button>
    )
});

export default CLickButton