import React from "react";
import Video from "./Video";

function List({ video, dispatch, editVideo }) {
  return (
    <>
      {video.map((item, index) => (
        <Video
          key={index}
          id={item.id}
          title={item.title}
          flag={item.flag}
          dispatch={dispatch}
          editVideo={editVideo}
        />
      ))}
    </>
  );
}

export default List;
