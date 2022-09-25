import React, { useState } from 'react'

const Textfeild = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);

    const changeHandle = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = () => {
        setList(name);
        console.log(list);
    }
    return (
        <div>
            <div>Textfeild</div>
            <h1>{name}</h1>
            <from>
                <input placeholder='enter value' value={name} onChange={changeHandle} />
                <input type="submit" value="Submit" />
            </from>
        </div>
    )
}

export default Textfeild