import React, { useContext } from 'react'
import CLickButton from './Button'
import useVideoDispatch from '../hooks/VideoDispatch';

export default function Video({title,flag,editVideo,id}) {
  const dispatch = useVideoDispatch();
  return (
    <>
        <div>{title} {flag && 'hello flagger'}</div>
        <CLickButton message="Hello" onClick={()=>console.log('hellll')}>Click</CLickButton>
        <button onClick={()=>dispatch({type: 'DELETE',payload: id})}>Delete</button>
        <button onClick={() => editVideo(id)}>Edit</button>
    </>
  )
}
