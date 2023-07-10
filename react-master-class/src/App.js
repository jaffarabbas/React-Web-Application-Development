import './App.css';
import Video from './components/Video';

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
  return (
   <div>
    Hello 
    {
      arr.map((item,index) => <Video key={index} title={item.title} flag={item.flag}/>)
    }
   </div>
  );
}

export default App;
