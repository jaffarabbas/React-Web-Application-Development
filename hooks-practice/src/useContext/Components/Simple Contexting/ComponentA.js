import React from 'react'
import ComponentB from './ComponentB'

const {Provider, Consumer} = React.createContext();
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function ComponentA() {
    return(
        <Provider value={'d'}>
            <ComponentB/>
            <div>Hello</div>
        </Provider>
    )   
}

export {Consumer};