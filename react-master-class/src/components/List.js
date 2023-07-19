import Video from "./Video";
import useVideoContext from "../hooks/Video";
import { useCallback, useDeferredValue, useEffect, useState, useTransition } from "react";
import axios from "axios";
import CLickButton from "./Button";
import useVideoDispatch from "../hooks/VideoDispatch";
import arr from "../data/data";
function List({ editVideo }) {
  console.log('list rendered');

  const video = useVideoContext();
  const dispatch = useVideoDispatch();
  // const [video, setVideo] = useState([]);
  // const differedVideo = useDeferredValue(video, { timeoutMs: 1000 });
  const [isPending, startTransition] = useTransition();
  const url = "http://localhost:5000/users";

  const play = useCallback(async function handleClick(){
    const data = await axios.get(url);
    console.log(data);
    dispatch({ type: "LOAD", payload: data.data });
  },[dispatch]);

  useEffect(() => {
    play();
  },[]);

  // function fetch(){
  //   startTransition(() => {
  //     setVideo(arr);
  //   });
  // }
  return (
    <>
      {/* {video.map((item, index) => (
        <Video
          key={index}
          id={item.id}
          title={item.title}
          flag={item.flag}
          editVideo={editVideo}
        />
      ))} */}
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
      {/* <CLickButton onClick={fetch}>{isPending ? 'Getting' : 'Fetch'}</CLickButton> */}
    </>
  );
}

export default List;
