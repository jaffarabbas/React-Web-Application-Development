import React, { memo, useCallback, useContext } from 'react'
import CLickButton from './Button'
import useVideoDispatch from '../hooks/VideoDispatch';

//component memoization
//i use it because every time i click edit the Video component in list are renderd again e.g 
//i have 10 video in list i click in one video for edit rest of 9 will also be renderd falto me
//so i use memoization to prevent this
const Video = memo(
  function Video({title,flag,editVideo,id}) {
    console.log('video rendered');
    const dispatch = useVideoDispatch();
    const click = useCallback(()=>console.log('hellll'),[]);
    return (
      <>
          <div>{title} {flag && 'hello flagger'}</div>
          <CLickButton message="Hello" onClick={click}>Click</CLickButton>
          <button onClick={()=>dispatch({type: 'DELETE',payload: id})}>Delete</button>
          <button onClick={() => editVideo(id)}>Edit</button>
      </>
    )
  }
);

export default Video
