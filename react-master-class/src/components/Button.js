import React from 'react'

const Button = ({message,childern}) => {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked'+message);
  }
  return (
    <div>
        <button onClick={handleClick}>{childern}</button>
    </div>
  )
}

export default Button