import React, { useContext } from 'react'
import { Consumer } from './ComponentA'

export default function ComponentD() {
   // const number = useContext(Consumer);
    return (
        <div>
            <Consumer>
                {(context) => (
                    {context}
                )}
            </Consumer>
        </div>
    )
}
