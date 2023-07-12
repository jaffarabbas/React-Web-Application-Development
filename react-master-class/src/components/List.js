import React from "react";
import Video from "./Video";

function List({ video, deleteVideo, editVideo }) {
  return (
    <>
      {video.map((item, index) => (
        <Video
          key={index}
          id={item.id}
          title={item.title}
          flag={item.flag}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
        />
      ))}
    </>
  );
}

export default List;
