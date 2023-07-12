import React, { useEffect, useState } from 'react'
let schema = {
    title: '',
    flag: false
};

function Add({add,update,edit}) {
    const [obj,setObj] = useState(schema);

    function handleSubmit(e) {
        // e.preventDefault();
        // if(edit){
        //     update(obj);
        // }else{
        //     add(obj);
        // }
        // setObj(schema);
    }

    function handleChange(e) {
        console.log(e.target.name,e.target.value);
        setObj({...obj,[e.target.name]: e.target.value})
    }

    useEffect(() => {
        if(edit){
            setObj(edit);
        }
    },[edit]);
    
  return (
    <div>
        <input type='text' name='title' value={obj.title} onChange={handleChange} placeholder='Title'/>
        <input type='checkbox' name='flag' checked={obj.flag} onChange={handleChange} placeholder='Flag'/>
        <button onClick={handleSubmit}>{edit ? 'Edit' : 'Add'}</button>
    </div>
  )
}

export default Add