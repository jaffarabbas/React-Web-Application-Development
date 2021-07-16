import React from 'react';
import Person from '../newComponent/Addnew';

const list = (props) => props.persons.map((person,index)=>{
    return <Person name={person.name} key={person.id} delete={() => props.delete(index)} change={(event) => props.changed(event,person.id)}/>
});


export default list;  