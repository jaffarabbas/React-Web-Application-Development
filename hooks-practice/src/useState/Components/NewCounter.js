import React,{useState} from 'react'
import CountBtn from './CountBtn';

export default function NewCounter() {
    const [counter,setcounter] = useState(0);
    const [previousCount,setPreviousCount] = useState(0);
    const [status,setStatus] = useState(true);
    
    const increment = () => {
        setcounter(counter+1);
    }

    const newIncrement = (event) => {
        setPreviousCount(Number(event.target.value))
    }
    return (
        <div>
            <label>New Counter
            <input type="text" placeholder="new count" value={previousCount} onChange={newIncrement}/>
            </label>
            <CountBtn status={status} previousCount={previousCount} count={counter} increment={increment}/>
        </div>
    )
}
