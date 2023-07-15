import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyButton from './Button/Button'

const user = {
  name: 'neil',
  url: 'https://www.google.com'
};

function App() {
  const [count,setCount] = useState(0);
  
  function handleClick(){
    setCount(count + 1);
  }
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {user.name}
        </p>
        <a
          className="App-link"
          href={user.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          My First React App
          
        </a>
        <MyButton count={count} onClick={handleClick} />
        
      </header>
    </div>
  );
}

export default App;
