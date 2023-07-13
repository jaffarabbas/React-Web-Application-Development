import { useState } from 'react';
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
  let schema = {
    title: '',
    flag: ''
  };
  const [video, setvideo] = useState(arr);
  const [edit, setEdit] = useState(null);

  function addVideo(obj) {
    setvideo([...video,{...obj,id: video.length+1}]);
  }

  function deleteVideo(index) {
    setvideo(video.filter((item,i) => item.id !== index));
    console.log(index);
  }

  function editVideo(index) {
    console.log(index);
    setEdit(video.find((item,i) => item.id === index));
    console.log(edit);
  }

  function updateVideo(obj){
    let id = video.findIndex((item,i) => item.id == obj.id);
    let newVideo = [...video];
    newVideo.splice(id,1,obj);
    console.log(id,newVideo);
    setvideo(newVideo);
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
