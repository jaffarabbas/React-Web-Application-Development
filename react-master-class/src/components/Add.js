import React, { useEffect, useRef, useState } from 'react'
import useVideoDispatch from '../hooks/VideoDispatch';
let schema = {
    title: '',
    flag: ''
};

function Add({edit}) {
    const [obj,setObj] = useState(schema);
    const dispatch = useVideoDispatch();
    const inputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        if(edit){
            dispatch({type: 'UPDATE',payload: obj});
        }else{
            dispatch({type: 'ADD',payload: obj});
        }
        setObj(schema);
        console.log(obj);
    }

    function handleChange(e) {
        setObj({...obj,[e.target.name]: e.target.value});
    }

    useEffect(() => {
        // inputRef.current.focus();   
        if(edit){
            setObj(edit);
        }
    },[edit]);
  return (
    <div>
        <input ref={inputRef} type='text' name='title' value={obj.title} onChange={handleChange} placeholder='Title'/>
        <input type='text' name='flag' value={obj.flag} onChange={handleChange} placeholder='Flag'/>
        <button onClick={handleSubmit}>{edit ? 'Edit' : 'Add'}</button>
    </div>
  )
}

export default Add