import styled from 'styled-components';
import UserInfo from './Components/UserInfo';

//style components
const StyleDiv = styled.div`
  background-color:red;
  font-size:30px;
`;
//inline css
const style = {
  'color':'#fff'
}
function App() {
  return (
    <div>
      <StyleDiv>
      <p style={style}>hello</p>
      </StyleDiv>
      <UserInfo/>
    </div>
  );
}

export default App;
