import Video from "./Video";
import useVideoContext from "../hooks/Video";
import { useEffect, useState } from "react";
import axios from "axios";
import CLickButton from "./Button";
import useVideoDispatch from "../hooks/VideoDispatch";
function List({ editVideo }) {
  const video = useVideoContext();
  const dispatch = useVideoDispatch();

  const url = "https://jsonplaceholder.typicode.com/users";

  async function handleClick(){
    const data = await axios.get(url);
    dispatch({ type: "LOAD", payload: data.data });
  }
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <>
      {
        video.map((item, index) => {
          return <p key={item.id}>{item.name}</p>
        })
      }
      {/* {video.map((item, index) => (
        <Video
          key={index}
          id={item.id}
          title={item.title}
          flag={item.flag}
          editVideo={editVideo}
        />
      ))} */}
      <br></br>
      <CLickButton onClick={handleClick}>Fetch</CLickButton>
    </>
  );
}

export default List;
