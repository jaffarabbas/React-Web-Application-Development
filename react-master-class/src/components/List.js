import Video from "./Video";
import useVideoContext from "../hooks/Video";
import { useEffect } from "react";

function List({ editVideo }) {
  const video = useVideoContext();
  useEffect(() => {
    console.log("List.js: useEffect");
  }, [video]);
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
    </>
  );
}

export default List;
