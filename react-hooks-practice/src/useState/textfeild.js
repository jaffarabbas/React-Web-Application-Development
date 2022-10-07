import React, { useState } from 'react'

const Textfeild = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);

    const changeHandle = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (e) => {
        setList(name);
        console.log(list);
        e.preventDefault();
    }
    return (
        <div>
            <div>Textfeild</div>
            <h1>{name}</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='enter value' value={name} onChange={changeHandle} />
                <input type="submit" onClick={(e) => handleSubmit(e)} value="Submit" />
            </form>
            {/* {list.forEach(val => {
                console.log(val);
            })} */}
        </div>
    )
}

export default Textfeild