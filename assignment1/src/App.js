import Arts from './components/Arts';
import {useState} from 'react';

function App() {  
  const[theme,setTheme]=useState(true);  
  const lightTheme = {
    backgroundColor: "white",
    color: "black"
  }
  const darkTheme = {
    backgroundColor: "black",
    color: "white"
  }
  return (    
    <div style={theme?lightTheme:darkTheme}>
    <button onClick={()=>setTheme(!theme)}>{theme?'Dark Theme':'Light Theme'}</button>
      <Arts/>
    </div>
  );
}

export default App;
