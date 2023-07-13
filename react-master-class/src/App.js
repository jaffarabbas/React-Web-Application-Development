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
        return newVideo;
      default:
        return video;
    }
  }

  const [video,dispatch] = useReducer(videoReduser,arr);

  const [edit, setEdit] = useState(null);

  function addVideo(obj) {
    dispatch({type: 'ADD',payload: obj});
  }

  function deleteVideo(index) {
    dispatch({type: 'DELETE',payload: index});
  }

  function editVideo(index) {
    setEdit(video.find((item,i) => item.id === index));
  }

  function updateVideo(obj){
    dispatch({type: 'UPDATE',payload: obj});
  }
  
  return (
   <div>
    <List editVideo={editVideo} deleteVideo={deleteVideo} video={video}></List>
    <br/>
    <Add add={addVideo} update={updateVideo} edit={edit}></Add>
    {/* <CLickButton onClick={()=>{
      setvideo([...video,{title: 'jaffar3',flag: true}])
    }}>Add Video</CLickButton> */}
    <Counter></Counter>
   </div>
  );
}

export default App;
