import { useReducer, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Add from './components/Add';
import List from './components/List';

function App() {
  let arr = [
    {
      id:1,
      title: 'jaffar',
      flag: true
    },
    {
      id:2,
      title: 'jaffar1',
      flag: false
    },
    {
      id:3,
      title: 'jaffar2',
      flag: true
    },
  ];
  // const [video, setvideo] = useState(arr);
  const [edit, setEdit] = useState(null);
  const [video,dispatch] = useReducer(videoReduser,arr);

  function videoReduser(video,action){
    switch(action.type){
      case 'ADD':
        return [...video,{...action.payload,id: video.length+1}];
      case 'DELETE':
        return video.filter((item,i) => item.id !== action.payload);
      case 'UPDATE':
        let id = video.findIndex((item,i) => item.id == action.payload.id);
        let newVideo = [...video];
        newVideo.splice(id,1,action.payload);
        setEdit(null);
        return newVideo;
      default:
        return video;
    }
  }

  function editVideo(index) {
    setEdit(video.find((item,i) => item.id === index));
  }


  return (
   <div>
    <List editVideo={editVideo} dispatch={dispatch} video={video}></List>
    <br/>
    <Add dispatch={dispatch} edit={edit}></Add>
    {/* <CLickButton onClick={()=>{
      setvideo([...video,{title: 'jaffar3',flag: true}])
    }}>Add Video</CLickButton> */}
    <Counter></Counter>
   </div>
  );
}

export default App;
