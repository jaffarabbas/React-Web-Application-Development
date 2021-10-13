import React,{useState,useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import dataPassing from './Components/dataPassing';
export default function App() {
  const [state, setstate] = useState(0);
  return (
    <div>
      <h1>Helo{state}</h1>
      <button className="btn btn-primary ">Click me</button>
      <dataPassing title = 'hello'/>
    </div>
  )
}

