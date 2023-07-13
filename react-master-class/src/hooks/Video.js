import { useContext } from "react";
import VideoContext from "../context/VideoContext";

function useVideoContext(){
    return useContext(VideoContext);
}

export default useVideoContext;