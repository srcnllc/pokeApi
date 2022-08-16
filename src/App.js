import React,{useState}  from 'react';

import './App.css';
import SearchBar from './component/SearchBar/SearchBar';
import Content from './component/Content/Content'; 
import {BrowserRouter} from 'react-router-dom'
function App() {
  
  
  const [typing,setTyping]=useState("");

  function typingStart(e)
  {
    setTyping(e.target.value);

  }
  return (
    <div className="App">
      <BrowserRouter>
          <SearchBar typing={typing} typingStart={typingStart}/>
          <Content typing={typing} />
      </BrowserRouter>

    </div>
  );
}

export default App;
