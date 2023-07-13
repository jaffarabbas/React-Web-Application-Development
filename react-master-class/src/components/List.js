import Video from "./Video";
import useVideoContext from "../hooks/Video";

function List({ editVideo }) {
  const video = useVideoContext();
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
