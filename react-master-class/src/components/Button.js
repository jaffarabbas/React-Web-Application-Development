import React from 'react'

function CLickButton({message,children,onClick}){
    function handleClick() {
        console.log(message);
        onClick();
    }
    
  return (
    <button style={{backgroundColor: 'red'}} onClick={handleClick}>{children}</button>
  )
}

export default CLickButton