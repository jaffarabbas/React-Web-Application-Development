import Video from "./Video";
import useVideoContext from "../hooks/Video";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import CLickButton from "./Button";
import useVideoDispatch from "../hooks/VideoDispatch";
function List({ editVideo }) {
  console.log('list rendered');
  
  const video = useVideoContext();
  const dispatch = useVideoDispatch();
  const url = "http://localhost:5000/users";

  const play = useCallback(async function handleClick(){
    const data = await axios.get(url);
    console.log(data);
    dispatch({ type: "LOAD", payload: data.data });
  },[dispatch]);

  useEffect(() => {
    play();
  },[]);

  
  return (
    <>
      {video.map((item, index) => (
        <Video
          key={index}
          id={item.id}
          title={item.title}
          flag={item.flag}
          editVideo={editVideo}
        />
      ))}
      <br></br>
      <CLickButton onClick={play}>Fetch</CLickButton>
    </>
  );
}

export default List;
