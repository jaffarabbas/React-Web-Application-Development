import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispaatchContext";

function useVideoDispatch(){
    return useContext(VideoDispatchContext);
}

export default useVideoDispatch;