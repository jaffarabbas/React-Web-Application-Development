import React,{useState,useEffect} from 'react'

const incremental = () => {
  setstate(32);
}

export default function App() {
  const [state, setstate] = useState(0);
  return (
    <div>
      <h1>Helo{state}</h1>
      <button onClick={incremental}>Click me</button>
    </div>
  )
}

