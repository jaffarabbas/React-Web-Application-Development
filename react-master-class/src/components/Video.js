import React from 'react'
import CLickButton from './Button'

export default function Video({title,flag,dispatch,editVideo,id}) {
  return (
    <>
        <div>{title} {flag && 'hello flagger'}</div>
        <CLickButton message="Hello" onClick={()=>console.log('hellll')}>Click</CLickButton>
        <button onClick={()=>dispatch({type: 'DELETE',payload: id})}>Delete</button>
        <button onClick={() => editVideo(id)}>Edit</button>
    </>
  )
}
