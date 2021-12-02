import logo from './logo.svg';
import React from 'react';
import './App.css';
import User from './User'

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <User data={{name:"Sudhanshu Taldar", age:23}}/>
    </div>
  );
}

export default App;
