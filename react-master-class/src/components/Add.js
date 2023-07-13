import React, { useEffect, useState } from 'react'
import useVideoDispatch from '../hooks/VideoDispatch';
let schema = {
    title: '',
    flag: ''
};

function Add({edit}) {
    const [obj,setObj] = useState(schema);
    const dispatch = useVideoDispatch();

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
        if(edit){
            setObj(edit);
        }
    },[edit]);
  return (
    <div>
        <input type='text' name='title' value={obj.title} onChange={handleChange} placeholder='Title'/>
        <input type='text' name='flag' value={obj.flag} onChange={handleChange} placeholder='Flag'/>
        <button onClick={handleSubmit}>{edit ? 'Edit' : 'Add'}</button>
    </div>
  )
}

export default Add