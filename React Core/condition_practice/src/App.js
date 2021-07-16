import LoginControl from "./LoginControl";

function App(){
  return(
    <div>
        <LoginControl hasNewMessage={true} credits={100} Warning={true}/>
    </div>
  )
}

export default App;