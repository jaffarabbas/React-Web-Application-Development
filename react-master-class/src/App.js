import { useCallback, useContext, useReducer, useRef, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Add from "./components/Add";
import List from "./components/List";
import ThemeContext from "./context/ThemeContext";
import CLickButton from "./components/Button";
import VideoContext from "./context/VideoContext";
import VideoDispatchContext from "./context/VideoDispaatchContext";
import Dom from "./components/Dom";

function App() {
  const [edit, setEdit] = useState(null);
  const [video, dispatch] = useReducer(videoReduser, []);
  const [mode, setMode] = useState("dark");
  const intputRef = useRef(null);

  function videoReduser(video, action) {
    switch (action.type) {
      case "LOAD":
        return action.payload;
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


  const editVideo = useCallback(function editVideo(index) {
    setEdit(video.find((item, i) => item.id === index));
  },[video]);
  //it is constant it will never change
  // const themeContext = useContext(ThemeContext);
  // console.log(themeContext);
  const theme = useCallback( function changeTheme() {
    setMode(mode === "dark" ? "light" : "dark");
  },[mode]);

  return (
    <ThemeContext.Provider value={mode}>
      <VideoContext.Provider value={video}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`}>
            <CLickButton onClick={theme}>Theme</CLickButton>
            <Dom ref={intputRef}/>
            <CLickButton onClick={()=>intputRef.current.customFocus()}>CLick For Ref</CLickButton>
            <List editVideo={editVideo}></List>
            <br />
            <Add edit={edit}></Add>
            <br/>
          {/* <Counter></Counter> */}
          </div>
        </VideoDispatchContext.Provider>
      </VideoContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
