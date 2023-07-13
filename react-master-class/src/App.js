import { useContext, useReducer, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Add from "./components/Add";
import List from "./components/List";
import ThemeContext from "./context/ThemeContext";
import CLickButton from "./components/Button";
import VideoContext from "./context/VideoContext";
import VideoDispatchContext from "./context/VideoDispaatchContext";

function App() {
  let arr = [
    {
      id: 1,
      title: "jaffar",
      flag: true,
    },
    {
      id: 2,
      title: "jaffar1",
      flag: false,
    },
    {
      id: 3,
      title: "jaffar2",
      flag: true,
    },
  ];
  const [edit, setEdit] = useState(null);
  const [video, dispatch] = useReducer(videoReduser, arr);
  const [mode, setMode] = useState("dark");
  function videoReduser(video, action) {
    switch (action.type) {
      case "ADD":
        return [...video, { ...action.payload, id: video.length + 1 }];
      case "DELETE":
        return video.filter((item, i) => item.id !== action.payload);
      case "UPDATE":
        let id = video.findIndex((item, i) => item.id == action.payload.id);
        let newVideo = [...video];
        newVideo.splice(id, 1, action.payload);
        setEdit(null);
        return newVideo;
      default:
        return video;
    }
  }

  function editVideo(index) {
    setEdit(video.find((item, i) => item.id === index));
  }

  //it is constant it will never change
  // const themeContext = useContext(ThemeContext);
  // console.log(themeContext);

  function changeTheme() {
    setMode(mode === "dark" ? "light" : "dark");
  }
  return (
    <ThemeContext.Provider value={mode}>
      <VideoContext.Provider value={video}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`}>
            <CLickButton onClick={changeTheme}>Theme</CLickButton>
            <List editVideo={editVideo}></List>
            <br />
            <Add edit={edit}></Add>
          </div>
        </VideoDispatchContext.Provider>
      </VideoContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
