import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Add from './components/Add';
import List from './components/List';

function App() {
  let arr = [
    {
      title: 'jaffar',
      flag: true
    },
    {
      title: 'jaffar1',
      flag: false
    },
    {
      title: 'jaffar2',
      flag: true
    },
  ];
  const [video, setvideo] = useState(arr);
  const [edit, setEdit] = useState(null);

  function addVideo(obj) {
    setvideo([...video,obj]);
  }

  function deleteVideo(index) {
    setvideo(video.filter((item,i) => i !== index));
    console.log(index);
  }
  function editVideo(index) {
     setEdit(video.find((item,i) => i === index));
  }
  function updateVideo(obj){
    let id = video.findIndex((item,i) => item === obj);
    console.log(id);
    // let newVideo = [...video];
    // newVideo.splice(id,1,obj);
    // console.log(id,newVideo);
    // setvideo(newVideo);
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
